const express = require("express");
const MasterController = require("./master.controller");
// Create our Express router
const router = express.Router();

let controller = new MasterController();

// Create endpoint handlers for master info
router.route("/states").get(controller.getState);
router.route("/state/:stateId").get(controller.getStateById);

module.exports = router;
