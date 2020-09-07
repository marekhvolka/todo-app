import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class User {

  @ObjectIdColumn()
  id?: string;

  @Column()
  email: string;

  @Column()
  passwordHash: string;

  @Column()
  role?: string;

  @Column()
  token?: string;
}
