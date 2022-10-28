const express = require("express")

const router = express.Router()

const crewCtrl = require("../controllers/crew")

router.post("/", crewCtrl.createMember)
router.put("/:id", crewCtrl.modifyMember)
router.delete("/:id", crewCtrl.deleteMember)
router.get("/:id", crewCtrl.getOneMember)
router.get("/", crewCtrl.getAllMembers)

module.exports = router
