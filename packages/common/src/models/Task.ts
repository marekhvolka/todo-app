import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Task {

  @ObjectIdColumn()
  id?: string;

  @Column()
  text: string;

  @Column()
  isComplete: boolean;

  @Column()
  createdAt: number;

  @Column()
  userId: string;
}
