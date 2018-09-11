"use strict";
exports.__esModule = true;
var express = require("express");
var dotenv_1 = require("dotenv");
dotenv_1["default"].config();
var app = express();
var port = parseInt(process.env.PORT);
app.listen(port, function () {
    console.log("Listening at http://localhost:" + port + "/");
});
