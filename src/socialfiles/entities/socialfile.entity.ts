import { Socialpost } from "src/socialposts/entities/socialpost.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Socialfile {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    file: string;

    @ManyToOne(() => Socialpost)
    socialpost: Socialpost;
}
