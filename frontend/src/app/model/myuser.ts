import { MyEvent } from './myevent';
import { Role } from './role';

export interface MyUser {
  userName?: string;
  password?: string;
  roles?: Role[];
  events?: MyEvent[];
}

