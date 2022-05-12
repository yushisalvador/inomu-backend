const express = require("express");
const app = express();
const router = require("./routes/post.js");
const cors = require("cors");

app.use(router);
app.use(express.json());
app.use(cors);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>
  console.log(`server is running,  the app is listening on port ${PORT}`)
);
