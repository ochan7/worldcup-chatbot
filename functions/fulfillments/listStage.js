module.exports = request => agent => {
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
};
