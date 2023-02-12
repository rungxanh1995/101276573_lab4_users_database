const express = require("express");
const userModel = require("../models/User");
const app = express();

async function getAllUsers(res) {
	const users = await userModel.find({});
	try {
		res.status(200).send(users);
	} catch (err) {
		res.status(500).send(err);
	}
}

app.get("/users", async (req, res) => {
	await getAllUsers(res);
});

app.post("/users", async (req, res) => {
	const newUser = new userModel(req.body);
	
	try {
		await newUser.save((err) => {
			if(err) {
				res.send(err);
			} else {
				res.status(200).send(newUser);
			}
		});
	} catch (err) {
		res.status(500).send(err);
	}
})

module.exports = app;
