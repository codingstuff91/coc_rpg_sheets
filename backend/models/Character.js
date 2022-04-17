const mongoose = require("mongoose");

const characteristicSchema = new mongoose.Schema({
    strength: {
        score: {
            type: Number,
            min: 0,
            max: 20,
            default: 0,
        },
        mod: {
            type: String,
        },
    },
    dexterity: {
        score: {
            type: Number,
            min: 0,
            max: 20,
            default: 0,
        },
        mod: {
            type: String,
        },
    },
    constitution: {
        score: {
            type: Number,
            min: 0,
            max: 20,
            default: 0,
        },
        mod: {
            type: String,
        },
    },
    intelligence: {
        score: {
            type: Number,
            min: 0,
            max: 20,
            default: 0,
        },
        mod: {
            type: String,
        },
    },
    perception: {
        score: {
            type: Number,
            min: 0,
            max: 20,
            default: 0,
        },
        mod: {
            type: String,
        },
    },
    charisma: {
        score: {
            type: Number,
            min: 0,
            max: 20,
            default: 0,
        },
        mod: {
            type: String,
        },
    },
});

const vitalitySchema = new mongoose.Schema({
    health_dice: Number,
    health_points: Number,
    health_points_max: Number,
});

const luckSchema = new mongoose.Schema({
    luck_points: Number,
    luck_points_max: Number,
});

const combatSchema = new mongoose.Schema({
    initiative: Number,
    contact_attack: Number,
    ranged_attack: Number,
    mental_attack: Number,
});

const weaponSchema = new mongoose.Schema({
	name : {
		type : String
	},
	ranged_attack : {
		type : String
	},
	damage_score : {
		type : String
	},
	special : {
		type : String
	}
});

const descriptionSchema = new mongoose.Schema({
    gender: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    height: {
        type: String,
    },
    languages: [String],
});

const equipmentSchema = new mongoose.Schema({
	object : {
		type : String
	},
	equiped : {
		type : Boolean
	}
})

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    level: {
        type: Number,
        required: true,
    },
    profile: {
        type: String,
        required: true,
    },
    trait: {
        type: String,
        required: true,
    },
    living_level: {
        type: String,
        required: true,
    },
    description: [descriptionSchema],
    characteristics: [characteristicSchema],
    vitality: [vitalitySchema],
    luck_points: [luckSchema],
    combat: [combatSchema],
	weapons : [weaponSchema],
	equipment : [equipmentSchema],
    defense: {
        armor: {
            type: Number,
            default: 0,
        },
    },
});

const character = mongoose.model("Character", schema);

module.exports = character;
