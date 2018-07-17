const matches = require("../resources/matches.json");
const { processCountry } = require("../utils");

module.exports = request => agent => {
  const country = processCountry(request);
  const team = matches.find(
    m =>
      country.includes(m.home_team_country) ||
      country.includes(m.away_team_country)
  );
  const HOME_OR_AWAY = country.includes(team.home_team_country)
    ? "home_team"
    : "away_team";
  const starting_eleven = team[
    HOME_OR_AWAY + "_statistics"
  ].starting_eleven.reduce((acc, curr) => {
    acc += `${curr.name} NUM: ${curr.shirt_number} POS: ${curr.position}`;
    acc += ", ";
    return acc;
  }, "");
  const substitutes = team[HOME_OR_AWAY + "_statistics"].substitutes.reduce(
    (acc, curr) => {
      acc += `${curr.name} NUM: ${curr.shirt_number} POS: ${curr.position}`;
      acc += ", ";
      return acc;
    },
    ""
  );
  agent.add(
    "STARTING ELEVEN: " + starting_eleven + " SUBSTITUTES: " + substitutes
  );
};
