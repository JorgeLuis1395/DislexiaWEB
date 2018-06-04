import * as Joi from 'joi';

export const PREDIAGNOSTICO_SCHEMA= Joi
    .object()
    .keys({
        respuesta_estudiante: Joi
            .string()
            .min(3)
            .max(100)
            .required(),
        fecha_respuesta: Joi
            .date(),
    });