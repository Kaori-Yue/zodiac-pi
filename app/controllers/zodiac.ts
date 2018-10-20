const { WebhookClient } = require('dialogflow-fulfillment');

function WebhookProcessing(req: Express.Request, res: Express.Response) {
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



function test(agent: any) {
	agent.add("test")
}



export const Zodiac = WebhookProcessing;