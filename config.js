module.exports = {
    awsRegion: process.env.AWS_REGION || 'eu-west-1',
    streamArn: process.env.STREAM_ARN,
    streamName: process.env.STREAM_NAME,
};
