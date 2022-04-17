var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");

/**
 * Inscription d'un nouvel utilisateur
 */
router.post("/register", async (req, res) => {
    const salt = bcrypt.genSaltSync(10);
    const password = bcrypt.hashSync(req.body.password, salt);

    const new_user = new User({
        name: req.body.name,
        email: req.body.email,
        password: password,
    });
    try {
        let new_user_created = await new_user.save();
        res.json(new_user_created);
    } catch (e) {
        console.log(e.message);
    }
});

module.exports = router;
