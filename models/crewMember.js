const mongoose = require("mongoose")

const crewMemberSchema = mongoose.Schema({
	name: { type: String, required: true },
})

module.exports = mongoose.model("CrewMember", crewMemberSchema)
