import { Injectable} from "@nestjs/common/decorators";

@Injectable()
export class AgendaService {

    //Metodo Crear Agenda
    agenda: Agenda[] = [];
    crearAgenda(agenda: Agenda): Agenda[]{
        this.agenda.push(agenda);
        return this.agenda;
    }

    //Metodo Listar Todos los materias
    listarAgendas(){
        return this.agenda;
    }

    //Metodo obtener un agenda
    obtenerUno(agendaID){

        console.log(this.agenda[agendaID]);
        return this.agenda[agendaID];
    }

    //Metodo editar un agenda
    editarUno(agendaID, actividad, fechaRegistro, prioridad, profesorId){
        let agendaActualizada = this.obtenerUno(agendaID);

        agendaActualizada.actividad = actividad;
        agendaActualizada.fechaRegistro = fechaRegistro;
        agendaActualizada.prioridad = prioridad;
        agendaActualizada.profesorId = profesorId;

        return agendaActualizada;
    }

}


export class Agenda {
    constructor(
        public fechaRegistro: string,
        public actividad: string,
        public prioridad: string,
        public profesorId:number,
    ){};
}