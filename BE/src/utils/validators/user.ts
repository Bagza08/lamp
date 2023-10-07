import Joi from "joi";

export  const registerSchema = Joi.object().keys({
    fullname: Joi.string().required(),
    username: Joi.string().required().min(4).max(100),
    email: Joi.string().email().required(),
    password: Joi.string().required(), //gunakan regex untuk persyaratan dalam penulisan password
  });


export  const loginSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

