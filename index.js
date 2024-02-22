require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const router = require("./backend/routers");
const path = require("path");
const compression = require("compression");

const app = express();

app.use(helmet());
app.use(compression());
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/api", router);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("¡Ups! Algo salió mal.");
});

app.set("port", process.env.PORT || 4000);

if (process.env.NODE_ENV !== "test") {
  app.listen(app.get("port"), () => {
    console.log(`Server listening on port ${app.get("port")}`);
  });
}

module.exports = app;
