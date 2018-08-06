import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {EstudianteEntity} from "../Estudiante/estudiante.entity";
import {ProfesorEntity} from "../Profesor/profesor.entity";
@Entity('juego')
export class JuegoEntity{

    @PrimaryGeneratedColumn()
    id_juego: number;
    @Column({length: 50})
    dificultad: string;
    @Column({length: 50})
    resultados: string;
    @Column({length: 50})
    palabras: string;

    @ManyToOne(
        type => EstudianteEntity,
        estudianteEntity => estudianteEntity.juegoFK)
    estudianteFK: EstudianteEntity;

    @ManyToOne(
        type => ProfesorEntity,
        profesorEntity => profesorEntity.juegoFK)
    profesorFK: ProfesorEntity;
}