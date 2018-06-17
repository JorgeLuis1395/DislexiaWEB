import {Body, Controller, Post} from "@nestjs/common";
import {Agenda, AgendaService} from "./agenda.service";
import {AgendaPipes} from "../pipes/agenda.pipes";
import {AGENDA_SCHEMA} from "./agenda.schema";

@Controller('Agenda')
export class  AgendaController {
    constructor(private  agendaService: AgendaService){

    }
    //Body params
    @Post('crear') //uso pipe
    crearAgenda(@Body(new AgendaPipes(AGENDA_SCHEMA)) bodyParams) {
        const agenda1 = new Agenda(
            bodyParams.fechaRegistro,
            bodyParams.actividad,
            bodyParams.prioridad,
            bodyParams.profesorId

        );
        return this.agendaService.crearAgenda(agenda1);
    }
}