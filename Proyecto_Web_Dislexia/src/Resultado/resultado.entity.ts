import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity('web_dislexia')
export class ResultadoEntity {

    @PrimaryGeneratedColumn()
    id_respuesta: number;
    @Column({length: 100})
    respuesta_esperada: string;

}