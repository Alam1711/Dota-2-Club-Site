//Required
const express = require("express");
const router = express.Router();
const controller = require("../controllers/eventController");

//Load Homepage
router.get("/", controller.index);

//Create new event
router.get("/new", controller.new);

router.get("/about", controller.about);

router.post("/", controller.create);

router.get("/:id", controller.show);

router.get("/:id/edit", controller.edit);

router.put("/:id", controller.update);

router.delete("/:id", controller.delete);

//export

module.exports = router;
