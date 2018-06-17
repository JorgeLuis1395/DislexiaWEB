import {Injectable} from "@nestjs/common/decorators";
@Injectable()

export class EstudianteService {

    //Metodo Crear estudiante
    estudiantes: Estudiante[] = [];
    crearEstudiante(estudiante: Estudiante): Estudiante[]{
        this.estudiantes.push(estudiante);
        return this.estudiantes;
    }

    //Metodo Listar Todos los estudiante
    listarEstudiante(){
        return this.estudiantes;
    }

    //Metodo obtener un estudiante
    obtenerUno(estudianteID){

        console.log(this.estudiantes[estudianteID]);
        return this.estudiantes[estudianteID];
    }

    //Metodo editar un estudiante
    editarUno(idEstudiante, semestreActualEst){
        let estudianteeActualizado = this.obtenerUno(idEstudiante);
        estudianteeActualizado.semestreActual = semestreActualEst;
        return estudianteeActualizado;
    }
}


export class Estudiante {

    constructor(
        public semestreActual:number,
    ){};

}