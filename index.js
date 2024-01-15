require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

const routes = require("./routes/routes");

const app = express();
app.use(cors());

app.use(express.json());

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});

app.use("/api", routes);

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
