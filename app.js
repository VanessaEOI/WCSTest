const express = require("express")
const mongoose = require("mongoose")

mongoose
	.connect(
		"mongodb+srv://Vanessa:40PkrSHsz2573MCq@wildcodeschool.1k9jrqv.mongodb.net/?retryWrites=true&w=majority",
		{ useNewUrlParser: true, useUnifiedTopology: true }
	)
	.then(() => console.log("Connexion à MongoDB réussie !"))
	.catch(() => console.log("Connexion à MongoDB échouée !")
)

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
	const crew = [
		{
			name: "Bob",
		},
		{
			name: "Ron",
		},
	]
	res.status(201).json(crew)
})

app.post("/api/crew", (req, res, next) => {
	console.log(req.body)
	res.status(201).json({ message: "Objet créé" })
})

module.exports = app
