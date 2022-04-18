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
 * Afficher tous les personnages d'un joueur
 */
router.get("/:user_id", async (req, res) => {
    const user_id = req.params.user_id;

    try {
        let characters = await Character.find({user : user_id}).select(['name','_id']);
        res.json(characters);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/**
 * Afficher un personnage
 */
router.get("/:character_id", async (req, res) => {
    const character_id = req.params.character_id;

    try {
        let character = await Character.findById(character_id);
        res.json(character);
    } catch (e) {
        res.json({ message: e.message });
    }
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
