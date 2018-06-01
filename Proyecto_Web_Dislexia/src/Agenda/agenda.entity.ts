import {Column, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../Usuario/usuario.entity";


export class AgendaEntity {

    @PrimaryGeneratedColumn()
    id_agenda: number;
    @Column()
    fecha_registro: Date;

    @Column()
    actividad: string;

    @Column()
    prioridad: string;



}