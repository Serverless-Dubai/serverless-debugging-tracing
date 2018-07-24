const AWSXRay = require('aws-xray-sdk');
let AWS = AWSXRay.captureAWS(require('aws-sdk'));
const https = AWSXRay.captureHTTPs(require('https'));
const uuid = require('uuid');

const { awsRegion, streamName} = require('./config');
AWS.config.update({ region: awsRegion });
const kinesis = new AWS.Kinesis();


async function putRecord(data) {
  const partitionKey = uuid.v1();
  const record = {
    Data: JSON.stringify(data),
    PartitionKey: partitionKey,
    StreamName: streamName,
  };
  return kinesis.putRecord(record).promise().then(() => {
    console.log(`Data successfully written to Kinesis.\nPartitionKey: ${partitionKey}\nStreamName: ${streamName}`);
  });
}

async function handleRequest(event, context, callback) {
  
  // write data to kinesis
  await putRecord(event);



  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'This looks like it works',
      input: event,
    }),
  };

  // creates error
  // try {
  //   console.log(doesNotExist);
  // } catch (err) {
  //   console.error(err);
  //   callback(err, null);
  // }
  

  callback(null, response);

};


module.exports = {
  handleRequest,
}


