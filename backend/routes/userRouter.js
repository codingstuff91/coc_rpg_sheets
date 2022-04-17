var express = require("express");
var router = express.Router();

const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

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

/**
 * Connexion d'un utilisateur
 */
router.post("/login", async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return res.status(400).json({
            message: "Aucun utilisateur trouvé avec cette adresse mail",
        });
    }

    const password_match = await bcrypt.compare(
        req.body.password,
        user.password
    );

    if (!password_match) {
        return res
            .status(400)
            .json({ message: "Mauvais mot de passe ! Veuillez ré essayer" });
    }

    const auth_token = await jwt.sign({ user: user }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });

    res.json({user, auth_token});
});

module.exports = router;
