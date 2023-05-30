import { Exclude } from "class-transformer";
import { Profile } from "src/profiles/entities/profile.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Socialuser {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    username: string;
    @Column()
    email: string;
    @Column()
    firstName: string;
    @Column()
    lastName: string;
    @Column()
    password: string;

    @Column({
        type: 'datetime',
        nullable: true
    })
    dob: Date;
    
    @CreateDateColumn()
    joined: Date;

    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile;
}
