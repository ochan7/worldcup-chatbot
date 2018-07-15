const functions = require("firebase-functions");

process.env.DEBUG = "dialogflow:debug"; // enables lib debugging statements

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(
  require("./dialogflowFirebaseFulfillment")
);
exports.api = functions.https.onRequest(require("./server"));
