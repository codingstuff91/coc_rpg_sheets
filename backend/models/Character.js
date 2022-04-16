const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: "string"
});

const character = mongoose.model("Character", { schema });

module.exports = character;
