require("dotenv").config();

module.exports = {
  DB: process.env.MONGO_URI,
  PORT: process.env.PORT || 8080,
  API_URL: process.env.API_URL
};
