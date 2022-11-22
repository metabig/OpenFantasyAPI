import Player from "../models/player.model.js";

export const create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Player
  const player = new Player({
    ...req.body,
  });

  // Save Player in the database
  player
    .save(player)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Player.",
      });
    });
};

// Define functions for the Player model such as:
export const findAll = (req, res) => {
  Player.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving players.",
      });
    });
};

// Retrieve a player from the database by id
export const findOne = (req, res) =>
  Details.findById(req.params.id).catch((err) => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving players.",
    });
  });

// Update a player by the id in the request
export const update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Player.findByIdAndUpdate(id, req.body)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Player with id=${id}. Maybe Player was not found!`,
        });
      } else res.send({ message: "Player was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Player with id=" + id,
      });
    });
};

// Delete a player with the specified id in the request
export const remove = (req, res) => {
  const id = req.params.id;

  Player.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Player with id=${id}. Maybe Player was not found!`,
        });
      } else {
        res.send({
          message: "Player was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Player with id=" + id,
      });
    });
};
