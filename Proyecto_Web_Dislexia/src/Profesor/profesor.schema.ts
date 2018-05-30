import * as Joi from 'joi';

export const PROFESOR_SCHEMA= Joi
    .object()
    .keys({

        anio_educacion_basica: Joi
            .number()
            .integer()
            .greater(0)
            .less(150),
        materia_asignada: Joi
            .string()
            .alphanum()
            .min(3)
            .max(100)
            .required(),
    });