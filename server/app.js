require("dotenv").config();

const express = require("express");
const App = express();

App.use(require("body-parser"));
App.use(require("cookie-parser"));

module.exports = App;
