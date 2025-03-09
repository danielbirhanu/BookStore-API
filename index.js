require("dotenv").config();
const express = require("express");
const connectedToDb = require('./database/db')

const app = express();
const PORT = process.env.PORT || 5000;
connectedToDb();