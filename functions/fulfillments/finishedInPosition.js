module.exports = request => agent => {
  const { position } = request.body.queryResult.parameters;
  const positions = {
    1: "France",
    2: "Croatia",
    3: "Belgium",
    4: "England"
  };

  const result = positions[position] || `I'm not sure`;

  agent.add(result);
};
