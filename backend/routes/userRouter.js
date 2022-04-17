var express = require("express");
var router = express.Router();
const database = require("../config/database");
const bcrypt = require('bcryptjs');
const User = require("../models/User");

/**
 * Inscription d'un nouvel utilisateur
 */
router.post("/register", (req, res) => {
	const salt = bcrypt.genSaltSync(10);
	const password = bcrypt.hashSync(req.body.password, salt);

	const new_user = new User({
		name : req.body.name,
		email : req.body.email,
		password : password
	});

    database().then(() => {
        new_user.save().then(() => {
            res.json({message : "Votre inscription a été prise en compte"});
        }).catch((error)=>{
			console.log(error);
		});
    });
});

module.exports = router;
