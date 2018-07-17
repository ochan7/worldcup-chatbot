module.exports = request => agent => {
  const { Group } = request.body.queryResult.parameters;
  const groups = {
    A: "Group A: Russia, Saudi Arabia, Egypt, Uruguay",
    B: "Group B: Portugal, Spain, Morocco, Iran",
    C: "Group C: France, Australia, Peru, Denmark",
    D: "Group D: Argentina, Iceland, Croatia, Nigeria",
    E: "Group E: Brazil, Switzerland, Costa Rica, Serbia",
    F: "Group F: Germany, Mexico, Sweden, Korea Republic",
    G: "Group G: Belgium, Panama, Tunisia, England",
    H: "Group H: Poland, Senegal, Colombia, Japan"
  };
  const result = groups[Group] || "I'm not sure";

  agent.add(result);
};
