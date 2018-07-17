module.exports = {
  processCountry: request => {
    let country;
    if (request.body.queryResult.outputContexts) {
      country =
        request.body.queryResult.outputContexts[0].parameters["geo-country"];
    } else {
      country = request.body.queryResult.parameters["geo-country"];
    }
    return country;
  }
};
