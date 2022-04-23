require("dotenv").config();

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

const db = mongoose.connect(process.env.DB_CONNECTION_URI);
db.then(() => console.log("DB connected !"));

var usersRouter = require("./routes/userRouter");
var charactersRouter = require("./routes/characterRouter");

const PORT = process.env.PORT || 3000;
var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/user", usersRouter);
app.use("/character", charactersRouter);

app.listen(PORT, () => {
    console.info(`Application fonctionne sur le port ${PORT}`);
});

module.exports = app;
