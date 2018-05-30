import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity('web_dislexia')
export class PrediagnosticoEntity {

    @PrimaryGeneratedColumn()
    id_prediagnostico: number;
    @Column({length: 100})
    respuesta_estudiante: string;
    @Column()
    fecha_respuesta: Date ;
}