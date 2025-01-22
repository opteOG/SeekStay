const dotenv = require("dotenv");

dotenv.config();

module.exports = { SERVER_PORT, HOST, PORT, DATABASE, USER, PASSWORD, CONNECTIONLIMIT} = process.env;
