const Joi = require("@hapi/joi");

module.exports = validator = (data) => {
  const schema = Joi.object({
    partner1: Joi.string().min(3).max(30).required(),
    partner2: Joi.string().min(3).max(30).required(),
  });

  return schema.validate(data);
};
