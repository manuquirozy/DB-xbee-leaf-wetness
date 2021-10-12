import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity({ name: 'readings' })
export class ReadingsModel extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ name: 'device_number', type: 'float' })
  deviceNumber: number;

  @Column({ name: 'temperature', type: 'float' })
  temperature: number;

  @Column({ name: 'humidity', type: 'float' })
  humidity: number;

  @Column({ name: 'vapor', type: 'float' })
  vapor: number;

  @Column({ name: 'battery', type: 'float' })
  battery: number;

  @Column({ name: 'last_update', type: 'timestamptz', default: 'now()' })
  lastUpdate: Date;
}
