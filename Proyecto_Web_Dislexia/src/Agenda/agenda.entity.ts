import {Column, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {PrediagnosticoEntity} from "../Prediagnostico/prediagnostico.entity";
import {ProfesorEntity} from "../Profesor/profesor.entity";


export class AgendaEntity {

    @PrimaryGeneratedColumn()
    id_agenda: number;
    @Column()
    fecha_registro: Date;

    @Column()
    actividad: string;

    @Column()
    prioridad: string;

    @ManyToOne(
        type => ProfesorEntity,
        profesorEntity => profesorEntity.agendaFK)
    profesorFK: ProfesorEntity;

}