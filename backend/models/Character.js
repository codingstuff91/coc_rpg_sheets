const mongoose = require("mongoose");

const characteristicSchema = new mongoose.Schema({
	strength : {
		type : Number,
		default : 0,
		min : 1,
		max : 20
	},
	dexterity : {
		type : Number,
		default : 0,
		min : 1,
		max : 20
	},
	constitution : {
		type : Number,
		default : 0,
		min : 1,
		max : 20
	},
	intelligence : {
		type : Number,
		default : 0,
		min : 1,
		max : 20
	},
	perception : {
		type : Number,
		default : 0,
		min : 1,
		max : 20
	},
	charisma : {
		type : Number,
		default : 0,
		min : 1,
		max : 20
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
	living_level : {
		type : String,
		required : true
	},
	characteristics : [characteristicSchema],
    vitality: [vitalitySchema],
    luck_points: [luckSchema],
    combat: [combatSchema],
	defense : {
		armor : {
			type : Number,
			default : 0
		}
	}
});

const character = mongoose.model("Character", schema);

module.exports = character;
