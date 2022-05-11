const knexfile = require("./knexfile");
const environment = knex[process.env.NODE_ENV || "development"];
const db = require("knex")(environment);

module.exports = db;
