const Couple = require("../models/model");
const validator = require("../validate.js");
exports.check = async (req, res) => {
  try {
    //validate request data using Joi
    const { error } = validator(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const { partner1, partner2 } = await req.body;
    // partner1 = partner1.trim;
    // partner2 = partner2.trim;

    // Check if the provided names are valid or not
    if (!partner1.trim() || !partner2.trim()) {
      return res.status(400).send("Please provide valid names.");
    }

    // Find the couple with their names
    const foundCouple = await Couple.find({
      partner1: partner1.trim(),
      partner2: partner2.trim(),
    });

    // If not found , then create a new document with the given names and calculate their love percentage
    if (foundCouple.length === 0) {
      const couple = await Couple.create({
        partner1: partner1.trim(),
        partner2: partner2.trim(),
        percentage: `${Math.floor(Math.random() * 101)}%`,
      });
      // return the newly created document as response
      return res.status(201).send(couple);
    }

    //If the couple if found in the database, return the found document in response
    return res.status(200).send(foundCouple);
  } catch (err) {
    // Catch any errors and send as response
    res.status(500).send(err);
  }
};
