const { WebhookClient } = require("dialogflow-fulfillment");
const { Card, Suggestion } = require("dialogflow-fulfillment");
const functions = require("firebase-functions");
const API_URL = functions.config().api.url;
let {
  fallback,
  listStadiums,
  listTeams,
  listStage,
  listInGroup,
  finishedInPosition,
  listPlayers,
  listAllMatches,
  weatherAtMatch
} = require("./fulfillments");

process.env.DEBUG = "dialogflow:debug";

module.exports = (request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log("Dialogflow Request headers: " + JSON.stringify(request.headers));
  console.log("Dialogflow Request body: " + JSON.stringify(request.body));

  let intentMap = new Map();
  intentMap.set("Default Fallback Intent", fallback);
  intentMap.set("WhichStadiumsPlayed", listStadiums);
  intentMap.set("WhichTeams", listTeams);
  intentMap.set("WhoWereInThe", listStage(request));
  intentMap.set("WhichCountriesInGroup", listInGroup(request));
  intentMap.set("WhoCameIn", finishedInPosition(request));
  intentMap.set("FavouriteTeam-Players", listPlayers(request));
  intentMap.set("WhoPlaysFor", listPlayers(request));
  intentMap.set("MatchesOf", listAllMatches(request));
  intentMap.set("FavouriteTeamMatches", listAllMatches(request));
  intentMap.set("WeatherAt", weatherAtMatch(request));
  agent.handleRequest(intentMap);
};
