'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'This looks like it works',
      input: event,
    }),
  };

  callback(null, response);

};
