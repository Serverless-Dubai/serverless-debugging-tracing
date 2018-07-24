async function run(event, context, callback) {
    if (!event.Records) {
        console.log(`event.Records is falsy. Event received:\n${JSON.stringify(event, null, 2)}`);
    }

    console.log(`Received event:\n${JSON.stringify(event, null, 2)}`);

    callback(null, 'ok');

}

module.exports = {
    run,
};