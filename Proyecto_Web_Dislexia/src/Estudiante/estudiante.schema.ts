import * as Joi from 'joi';

export const ESTUDIANTE_SCHEMA= Joi
    .object()
    .keys({

        anio_educacion_basica: Joi
            .number()
            .integer()
            .greater(0)
            .less(150),
    });