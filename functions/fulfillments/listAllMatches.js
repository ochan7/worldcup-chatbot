const matches = require("../resources/matches.json");
const { processCountry } = require("../utils");

module.exports = request => agent => {
  const country = processCountry(request);
  const matchesPlayed = matches.filter(
    m =>
      country.includes(m.home_team_country) ||
      country.includes(m.away_team_country)
  );

  const result = matchesPlayed.reduce((acc, curr) => {
    acc += `${curr.stage_name} ${curr.home_team.code} ${curr.home_team.goals} ${
      curr.away_team.goals
    } ${curr.away_team.code}, `;
    return acc;
  }, "");

  agent.add(result);
};
