import joi from 'joi';

export const registerValidator = joi.object({
  firstname: joi.string().required(),
  lastname: joi.string().required(),
  email : joi.string().email().required(),
  password: joi.string().required().min(5)
})

export const loginValidator = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required().min(5)
})