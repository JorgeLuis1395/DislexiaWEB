import {Column, Entity, PrimaryGeneratedColumn} from "../../node_modules/typeorm";
@Entity('web_dislexia')
export class ProfesorEntity {

    @PrimaryGeneratedColumn()
    id_profesor: number;
    @Column()
    anio_educacion_basica: number;
    @Column({length: 50})
    materia_asignada: string;

}