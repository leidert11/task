require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const router = require("./backend/routes/");
const path = require("path");

const app = express();
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", router);

app.set("port", process.env.PORT || 4000);

if (process.env.NODE_ENV !== "test") {
  app.listen(app.get("port"), () => {
    console.log("Server on port " + app.get("port") + " on dev");
  });
}

module.exports = app;
 