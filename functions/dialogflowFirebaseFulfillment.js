const { WebhookClient } = require("dialogflow-fulfillment");
const { Card, Suggestion } = require("dialogflow-fulfillment");

process.env.DEBUG = "dialogflow:debug"; // enables lib debugging statements
module.exports = (request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log("Dialogflow Request headers: " + JSON.stringify(request.headers));
  console.log("Dialogflow Request body: " + JSON.stringify(request.body));

  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }

  function countriesInGroup(agent) {
    agent.add(`I don't know`);
  }
  let intentMap = new Map();
  intentMap.set("WhichCountriesInGroup", countriesInGroup);
  intentMap.set("Default Fallback Intent", fallback);
  agent.handleRequest(intentMap);
};
