import { Socialpost } from "src/socialposts/entities/socialpost.entity";
import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class Tag {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    tag: string;
    @ManyToOne(() => Socialpost)
    socialpost: Socialpost;
}
