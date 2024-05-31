import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity() // se puede pasar como parametro el nombre de tabla ej: 'usersTable'
export class Event extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Column()
    firstname: string;

    @CreateDateColumn()
    date: Date;

    @Column()
    gps: string;
}
