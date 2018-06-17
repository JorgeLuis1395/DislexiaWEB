import * as Joi from 'joi';

export const JUEGO_SCHEMA= Joi
    .object()
    .keys({

        dificultad: Joi
            .string()
            .alphanum()
            .min(5)
            .max(15)
            .required(),
        resultados: Joi
            .string()
            .alphanum()
            .min(3)
            .max(50)
            .required(),
        palabras: Joi
            .string()
            .alphanum()
            .min(3)
            .max(50)
            .required(),
    });