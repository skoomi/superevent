import { MyEvent } from './myevent';
import { Role } from './role';

export interface MyUser {
  id?: number;
  userName?: string;
  password?: string;
  roles?: Role[];
  events?: MyEvent[];
}
