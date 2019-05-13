import { MyUser } from './myuser';

export interface MyEvent{
  id?: number;
  name?: string;
  price?: number;
  // startDate?: Date;
  // endDate?: Date;
  lessons?: number;
  timetable?: string;
  shortDescription?: string;
  description?: string;
  imgPath?: string;
  seats?: number;
  users?: MyUser[];
}
