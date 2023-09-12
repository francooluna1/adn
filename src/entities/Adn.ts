import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("adns")
export class Adn extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    adn: string

    @Column()
    isMutation: boolean
}