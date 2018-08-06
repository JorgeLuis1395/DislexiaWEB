import {Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../Usuario/usuario.entity";
import {PrediagnosticoEntity} from "../Prediagnostico/prediagnostico.entity";
import {SolucionEntity} from "../Solucion/solucion.entity";
import {JuegoEntity} from "../Juego/juego.entity";
@Entity('estudiante')
export class EstudianteEntity {

    @PrimaryGeneratedColumn()
    id_estudiante: number;
    @Column()
    anio_educacion_basica: number;

    @ManyToOne(
        type => UsuarioEntity,
        estudianteEntity => estudianteEntity.estudiantes)
    usuarioFK: UsuarioEntity;

    @ManyToOne(
        type => PrediagnosticoEntity,
        prediagnosticoEntity => prediagnosticoEntity.estudianteFK)
    prediagnosticoFK: PrediagnosticoEntity;

    @OneToMany(
        type => JuegoEntity,
        juegoEntity => juegoEntity.estudianteFK)
    juegoFK: JuegoEntity[];


}