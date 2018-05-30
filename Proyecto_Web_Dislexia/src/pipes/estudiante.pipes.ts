import {ArgumentMetadata, BadRequestException, Injectable, PipeTransform} from '@nestjs/common';

import * as Joi from 'joi';
import { PeticionErroneaExceptions } from '../exceptions/peticion-erronea.exceptions';

@Injectable()
export class EstudiantePipes implements PipeTransform {

  constructor(private readonly _schema) {
  }

  transform(jsonAValidar: any, metadata: ArgumentMetadata) {

    const {
      error,
    } = Joi.validate(jsonAValidar, this._schema);

    if (error) {
      throw new PeticionErroneaExceptions(
        {
          erorr: error,
          mensaje: 'Json no valido',
        },
        10,
      );
    } else {
      return jsonAValidar;
    }
  }
}