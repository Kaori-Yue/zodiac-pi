"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { WebhookClient } = require('dialogflow-fulfillment');
function WebhookProcessing(req, res) {
    const agent = new WebhookClient({ request: req, response: res });
    console.info(`agent set`);
    let intentMap = new Map();
    intentMap.set('Default Welcome Intent', test);
    // intentMap.set('Default Fallback Intent', fallback);
    // intentMap.set('Add', add);
    // intentMap.set('<INTENT_NAME_HERE>', yourFunctionHandler);
    // intentMap.set('Who', who);
    agent.handleRequest(intentMap);
}
function test(agent) {
    agent.add("test");
}
exports.Zodiac = WebhookProcessing;
