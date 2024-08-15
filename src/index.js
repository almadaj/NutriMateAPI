const express = require("express");
const routes = require("./routes");

const app = express();
const db = require("../models/index");
app.use(express.json());
app.use(routes);

app.listen(3001);
