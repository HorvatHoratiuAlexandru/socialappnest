import { Socialpost } from "src/socialposts/entities/socialpost.entity";
import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class Socialfile {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    file: string;

    @ManyToOne(() => Socialpost)
    socialpost: Socialpost;
}
