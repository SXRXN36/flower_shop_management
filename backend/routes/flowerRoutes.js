const express = require("express");

const router = express.Router();

const flowerController = require("../controllers/flowerController");

router.get("/", flowerController.getFlowers);

router.post("/", flowerController.addFlower);

router.put("/:id", flowerController.updateFlower);

router.delete("/:id", flowerController.deleteFlower);

module.exports = router;