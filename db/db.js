const knexfile = require("../knexfile");
const environment = knexfile[process.env.NODE_ENV || "development"];
const db = require("knex")(environment);

module.exports = db;
