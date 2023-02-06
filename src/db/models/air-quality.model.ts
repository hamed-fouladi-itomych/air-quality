import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class AirQuality extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  datetime: Date;

  @Column({ nullable: true, default: null })
  city?: string;

  @Column()
  ts: Date;

  @Column()
  aqius: number;

  @Column()
  mainus: string;

  @Column()
  aqicn: number;

  @Column()
  maincn: string;
}
