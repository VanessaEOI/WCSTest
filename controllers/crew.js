const CrewMember = require("../models/CrewMember")

exports.createMember = (req, res, next) => {
	delete req.body._id
	const crewMember = new CrewMember({
		...req.body,
	})
	crewMember
		.save()
		.then(() => res.status(201).json({ message: "Nouveau membre enregistré" }))
		.catch((error) => res.status(400).json({ error }))
}

exports.modifyMember = (req, res, next) => {
	CrewMember.updateOne(
		{ _id: req.params.id },
		{ ...req.body, _id: req.params.id }
	)
		.then(() => res.status(200).json({ message: "Prénom modifié !" }))
		.catch((error) => res.status(400).json({ error }))
}

exports.deleteMember = (req, res, next) => {
	CrewMember.deleteOne({ _id: req.params.id })
		.then(() => {
			res.status(200).json({ message: "Membre supprimé !!" })
		})
		.catch((error) => {
			res.status(400).json({ error: error })
		})
}

exports.getOneMember = (req, res, next) => {
	CrewMember.findOne({ _id: req.params.id })
		.then((crewMember) => res.status(200).json(crewMember))
		.catch((error) => res.status(404).json({ error }))
}

exports.getAllMembers = (req, res, next) => {
	CrewMember.find()
		.then((crewMenbers) => res.status(200).json(crewMenbers))
		.catch((error) => res.status(400).json({ error }))
}
