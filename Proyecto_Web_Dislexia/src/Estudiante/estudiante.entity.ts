import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity('web_dislexia')
export class EstudianteEntity {

    @PrimaryGeneratedColumn()
    id_estudiante: number;
    @Column()
    anio_educacion_basica: number;

}