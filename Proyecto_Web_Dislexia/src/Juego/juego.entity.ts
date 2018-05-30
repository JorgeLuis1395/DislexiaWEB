import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity('web_dislexia')
export class JuegoEntity{

    @PrimaryGeneratedColumn()
    id_juego: number;
    @Column({length: 50})
    dificultad: string;
    @Column({length: 50})
    resultados: string;
}