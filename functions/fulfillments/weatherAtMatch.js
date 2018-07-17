const matches = require("../resources/matches.json");

module.exports = request => agent => {
  const { parameters } = request.body.queryResult;
  const country1 = parameters["geo-country"];
  const country2 = parameters["geo-country1"];

  const match = matches.find(
    m =>
      (country1.includes(m.home_team_country) &&
        country2.includes(m.away_team_country)) ||
      (country2.includes(m.home_team_country) &&
        country1.includes(m.away_team_country))
  );

  if (!match) {
    agent.add("Sorry I can't find that match");
  } else {
    const { humidity, temp_celsius, wind_speed, description } = match.weather;
    const result = `Humidity: ${humidity}, Temperature: ${temp_celsius} C, Wind Speed: ${wind_speed}, Overview: ${description}`;

    agent.add(result);
  }
};
