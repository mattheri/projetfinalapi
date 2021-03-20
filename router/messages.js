const router = require("express").Router();
const MessageModel = require("../db/schema/messageSchema");

/**
 * Chercher tous les messages d'un utilisateur
 */
router.get("/:id", async (req, res) => {
  try {
    const region = await MessageModel.findMessages(req.params.id);
    res.send(JSON.stringify(region));
  } catch (err) {
    res.status(404).send(err);
  }
});

/**
 * Chercher tous les messages d'un utilisateur avec un autre utilisateur precis
 */
router.get("/", async (req, res) => {
  try {
    const message = await MessageModel.findSpecificPersonMessages(req.query);
    res.send(JSON.stringify(message));
  } catch (err) {
    res.status(404).send(err);
  }
});

/**
 * Ajouter un message
 */
router.post("/", async (req, res) => {
  try {
    const message = await MessageModel.addMessage(req.body);
    console.log(message);
  } catch (err) {
    res.status(404).send(err);
  }
});

/**
 * Modifier une région
 */
router.put("/:id", async (req, res) => {
  try {
    const region = await MessageModel.updateRegion(req.params.id, req.body);
    res.send(JSON.stringify(region));
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;
