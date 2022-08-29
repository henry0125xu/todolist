const Joi = require("joi");

// validators

const registerValidator = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(1).max(30).required(),
    email: Joi.string().min(6).max(100).required().email(),
    password: Joi.string().min(6).max(256).required(),
  });
  return schema.validate(data);
};

const loginValidator = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).max(100).required().email(),
    password: Joi.string().min(6).max(256).required(),
  });
  return schema.validate(data);
};

module.exports = {
  registerValidator,
  loginValidator,
};
