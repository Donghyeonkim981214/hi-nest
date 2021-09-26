import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todolist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  task: string;
}