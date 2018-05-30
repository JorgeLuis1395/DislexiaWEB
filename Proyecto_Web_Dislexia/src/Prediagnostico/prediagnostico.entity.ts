import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {EstudianteEntity} from "../Estudiante/estudiante.entity";
@Entity('web_dislexia')
export class PrediagnosticoEntity {

    @PrimaryGeneratedColumn()
    id_prediagnostico: number;
    @Column({length: 100})
    respuesta_estudiante: string;
    @Column()
    fecha_respuesta: Date ;

    @OneToMany(
        type => EstudianteEntity,
        estudianteEntity => estudianteEntity.prediagnosticoFK)
    estudianteFK: EstudianteEntity[];


}