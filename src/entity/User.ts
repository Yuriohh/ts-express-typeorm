import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name: 'users'})
export class User {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', length: 50})
    name: string;

    @Column({type: 'varchar', length: 50})
    email: string;

    @Column({type: 'varchar', length: 255})
    password: string;

    @Column({type: "datetime"})
    created_at: Date

    @Column({type: 'datetime'})
    updated_at: Date

}
