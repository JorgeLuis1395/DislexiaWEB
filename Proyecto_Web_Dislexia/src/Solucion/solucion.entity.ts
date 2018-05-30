import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {EstudianteEntity} from "../Estudiante/estudiante.entity";
@Entity('web_dislexia')
export class SolucionEntity {

    @PrimaryGeneratedColumn()
    id_respuesta: number;
    @Column({length: 100})
    respuesta_esperada: string;



}