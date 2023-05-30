import { Profile } from "src/profiles/entities/profile.entity";
import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class Socialpost {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({nullable: true})
    description: string;
    @ManyToOne(() => Profile)
    profile: Profile;
}
