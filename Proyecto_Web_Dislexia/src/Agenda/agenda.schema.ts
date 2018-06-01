import * as Joi from 'joi';

export const AGENDA_SCHEMA= Joi
    .object()
    .keys({
        fecha_registro: Joi
            .date()

    });