const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");

const PORT = process.env.PORT || 8080;

function solveCorsIssue(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
}

app.use(solveCorsIssue);
app.use(cors());
app.use(express.json());
app.use("/posts", postRoutes);
app.use("/users", userRoutes);

app.listen(PORT, () =>
  console.log(`server is running,  the app is listening on port ${PORT}`)
);
