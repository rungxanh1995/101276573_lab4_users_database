const validate = require("mongoose-validator");

const usernameValidator = [
	validate({
		validator: "isLength",
		arguments: [4, Infinity],
		message: "Username must have at least 4 characters"
	})
]

const emailValidator = [
	validate({
		validator: "isEmail",
		message: "Email address is invalid"
	})
];

const cityValidator = [
	validate({
		validator: "matches",
		message: "City name can only contain letters and spaces",
		arguments: ["^[a-zA-Z\\s]+$"]
	})
];

const urlValidator = [
	validate({
		validator: "isURL",
		message: "Website URL or protocol is invalid",
		arguments: [{ protocols: ["http", "https"] }]
	})
];

const zipCodeValidator = [
	validate({
		validator: "matches",
		message: "Zip code format is invalid",
		arguments: ["^\\d{5}-\\d{4}$"]
	})
];

const phoneValidator = [
	validate({
		validator: "matches",
		message: "Phone format is invalid",
		arguments: ["^\\d-\\d{3}-\\d{3}-\\d{4}$"]
	})
];

module.exports = {
	usernameValidator,
	emailValidator,
	cityValidator,
	urlValidator,
	zipCodeValidator,
	phoneValidator
};
