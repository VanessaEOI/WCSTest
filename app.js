const express = require("express")
const mongoose = require("mongoose")

const CrewMember = require("./models/CrewMember")

mongoose
	.connect(
		"mongodb+srv://Vanessa:40PkrSHsz2573MCq@wildcodeschool.1k9jrqv.mongodb.net/?retryWrites=true&w=majority",
		{ useNewUrlParser: true, useUnifiedTopology: true }
	)
	.then(() => console.log("Connexion à MongoDB réussie !"))
	.catch(() => console.log("Connexion à MongoDB échouée !"))

const app = express()

app.use(express.json())

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*")
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
	)
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, DELETE, PATCH, OPTIONS"
	)
	next()
})

app.get("/api/crew", (req, res, next) => {
	CrewMember.find()
		.then((crewMenbers) => res.status(200).json(crewMenbers))
		.catch((error) => res.status(400).json({ error }))
})

app.get("/api/crew/:id", (req, res, next) => {
	CrewMember.findOne({ _id: req.params.id })
		.then((crewMember) => res.status(200).json(crewMember))
		.catch((error) => res.status(404).json({ error }))
})

app.post("/api/crew", (req, res, next) => {
	delete req.body._id
	const crewMember = new CrewMember({
		...req.body,
	})
	crewMember
		.save()
		.then(() => res.status(201).json({ message: "Nouveau membre enregistré" }))
		.catch((error) => res.status(400).json({ error }))
})

module.exports = app
