import { Roles } from './roles.enum';

export interface MyUser {
  id?: number;
  userName?: String;
  password?: String;
  roles?: Roles[];
}
