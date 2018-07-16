const { WebhookClient } = require("dialogflow-fulfillment");
const { Card, Suggestion } = require("dialogflow-fulfillment");
const functions = require("firebase-functions");
process.env.DEBUG = "dialogflow:debug";

module.exports = (request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log("Dialogflow Request headers: " + JSON.stringify(request.headers));
  console.log("Dialogflow Request body: " + JSON.stringify(request.body));

  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }
  function listStadiums(agent) {
    agent.add(
      `Otkrytiye Arena, Luzhniki Stadium, Krestovsky Stadium, Kazan Arena, Kaliningrad Stadium, Nizhny Novgorod Stadium, Mordovia Arena, Volgograd Arena, Cosmos Arena, Rostov Arena, Fisht Olympic Stadium and Central Stadium`
    );
  }
  function listTeams(agent) {
    agent.add(
      "Argentina, Australia, Belgium, Brazil, Colombia, Costa Rica, Croatia, Denmark, Egypt, England, France, Germany, Iceland, Iran, Japan, Korea Republic, Mexico, Morocco, Nigeria, Panama, Peru, Poland, Portugal, Russia, Saudi Arabia, Senegal, Serbia, Spain, Sweden, Switzerland, Tunisia and Uruguay"
    );
  }
  let intentMap = new Map();
  intentMap.set("Default Fallback Intent", fallback);
  intentMap.set("WhichStadiumsPlayed", listStadiums);
  intentMap.set("WhichTeams", listTeams);
  agent.handleRequest(intentMap);
};
