const { WebhookClient } = require("dialogflow-fulfillment");
const { Card, Suggestion } = require("dialogflow-fulfillment");
const functions = require("firebase-functions");
const API_URL = functions.config().api.url;

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
    //DISABLED DB requests due to latency issues

    // axios.get(`${API_URL}/teams`)
    //   .then(res => {
    //     const teams = res.data.teams.map(t => t.name);
    //     const result = teams.slice(0, -1).join(', ') + ' and ' + teams.slice(-1)[0];
    //     agent.add(result);
    //   }).catch(console.log)

    agent.add(
      "Argentina, Australia, Belgium, Brazil, Colombia, Costa Rica, Croatia, Denmark, Egypt, England, France, Germany, Iceland, Iran, Japan, Korea Republic, Mexico, Morocco, Nigeria, Panama, Peru, Poland, Portugal, Russia, Saudi Arabia, Senegal, Serbia, Spain, Sweden, Switzerland, Tunisia and Uruguay"
    );
  }
  function listStage(agent) {
    const { stage } = request.body.queryResult.parameters;
    const F = "Finals",
      SF = "Semi-finals",
      QF = "Quarter-finals";
    const result =
      stage === F
        ? "France and Croatia"
        : stage === SF
          ? "Belgium, Croatia, France and England"
          : stage === QF
            ? "Belgium, Brazil, Croatia, England, France, Russia, Sweden and Uruguay"
            : "I'm not sure";

    agent.add(result);
  }
  let intentMap = new Map();
  intentMap.set("Default Fallback Intent", fallback);
  intentMap.set("WhichStadiumsPlayed", listStadiums);
  intentMap.set("WhichTeams", listTeams);
  intentMap.set("WhoWereInThe", listStage);
  agent.handleRequest(intentMap);
};
