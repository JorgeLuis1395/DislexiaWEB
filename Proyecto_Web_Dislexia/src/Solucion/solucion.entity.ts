import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {EstudianteEntity} from "../Estudiante/estudiante.entity";
import {PrediagnosticoEntity} from "../Prediagnostico/prediagnostico.entity";
@Entity('solucion')
export class SolucionEntity {

    @PrimaryGeneratedColumn()
    id_respuesta: number;
    @Column({length: 100})
    respuesta_esperada: string;

    @ManyToOne(
        type => PrediagnosticoEntity,
        prediagnosticoEntity => prediagnosticoEntity.solucionFK)
    prediagnosticoFK: PrediagnosticoEntity;
}