const mongoose = require("mongoose");
const {
	usernameValidator,
	emailValidator,
	cityValidator,
	urlValidator,
	zipCodeValidator,
	phoneValidator
} = require("./validators/UserValidator");

const COLLECTION_NAME = "week5-lab-submission";
const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		validate: usernameValidator
	},
	email: {
		type: String,
		required: true,
		validate: emailValidator
	},
	address: {
		street: {
			type: String,
			required: true
		},
		suite: {
			type: String,
			required: true
		},
		city: {
			type: String,
			validate: cityValidator
		},
		zipcode: {
			type: String,
			validate: zipCodeValidator
		},
		geo: {
			lat: {
				type: String
			},
			lng: {
				type: String
			}
		}
	},
	phone: {
		type: String,
		validate: phoneValidator
	},
	website: {
		type: String,
		validate: urlValidator
	},
	company: {
		name: {
			type: String
		},
		catchPhrase: {
			type: String
		},
		bs: {
			type: String
		}
	}
});

const User = mongoose.model("User", UserSchema, COLLECTION_NAME);
module.exports = User;
