import * as Joi from 'joi';

export const AGENDA_SCHEMA= Joi
    .object()
    .keys({
        fecha_registro: Joi
            .date().required(),
        actividad: Joi
            .string()
            .min(3)
            .max(100)
            .required(),
        prioridad: Joi
            .string()
            .min(3)
            .max(100)
            .required(),
        profesorID: Joi.number().integer().required(),
    });