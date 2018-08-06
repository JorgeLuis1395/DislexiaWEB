import * as Joi from 'joi';

export const USUARIO_SCHEMA = Joi
    .object()
    .keys({
        nombre: Joi.string().regex(/^[a-zA-Z.,' ' ]{4,30}$/).required(),
        apellido: Joi.string().regex(/^[a-zA-Z.,' ' ]{4,30}$/).required(),
        correo_electronico: Joi.string().regex(/^[a-zA-Z0-9@_.,' ' ]{4,30}$/).required(),
        edad: Joi
            .number()
            .integer()
            .greater(0)
            .less(150),
        usuario: Joi.string().regex(/^[a-zA-Z.,' ' ]{4,30}$/).required(),
        contrasenia: Joi
            .string()
            .alphanum()
            .min(3)
            .max(100)
            .required(),
    });