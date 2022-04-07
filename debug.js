
/**
 * Script to execute Lambda with mock event.
 * - (optional) add breakpoint in lambda function to trigger VS code debugger.
 * - Execute this script through VS code lunch settings. 
*/
(async function () {

    // Update paths of your handler & event. 
    const HANDLER_PATH = "../amplify/backend/function/handleOrder/src";
    const EVENT_PATH = "../amplify/backend/function/handleOrder/src/event.json"

    // Load function & event
    const { handler } = require(HANDLER_PATH)
    const event = require(EVENT_PATH)

    // Invoke function
    const response = await handler(event)

    console.log('response: ', response);
})();
