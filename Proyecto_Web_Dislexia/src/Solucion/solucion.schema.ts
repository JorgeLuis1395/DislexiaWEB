import * as Joi from 'joi';

export const SOLUCION_SCHEMA=Joi
    .object()
    .keys({
        respuesta_esperada: Joi
            .string()
            .alphanum()
            .min(3)
            .max(50)
            .required(),

    });