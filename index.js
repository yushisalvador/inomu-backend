const express = require("express");
const app = express();
const router = require("./routes/post.js");
const cors = require("cors");

// function solveCorsIssue(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   next();
// }

app.use(cors);
// app.use(solveCorsIssue);
app.use(router);
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>
  console.log(`server is running,  the app is listening on port ${PORT}`)
);
