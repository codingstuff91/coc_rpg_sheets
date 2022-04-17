var express = require("express");
var router = express.Router();
const Character = require("../models/Character");

/**
 * Afficher tous les personnages
 */
router.get("/", async (req, res, next) => {
    let characters = await Character.find({});
    res.json(characters);
});

/**
 * Créer un nouveau personnage
 */
router.post("/", async (req, res) => {
    const new_character = new Character(req.body);

    try {
        let character = await new_character.save();
        res.json({ message: "Nouveau personnage crée" });
    } catch (e) {
        res.json({ message: e.message });
    }
});

module.exports = router;
