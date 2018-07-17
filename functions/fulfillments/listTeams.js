module.exports = agent => {
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
};
