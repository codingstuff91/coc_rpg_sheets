require("dotenv").config();

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var usersRouter = require("./routes/userRouter");
var charactersRouter = require("./routes/characterRouter");

const PORT = process.env.PORT || 3000
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", usersRouter);
app.use("/character", charactersRouter);

app.listen(PORT, () => {
    console.info(`Application fonctionne sur le port ${PORT}`);
});

module.exports = app;
