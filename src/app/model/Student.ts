import {Clazz} from './Clazz';

export interface Student {
  id?: string;
  name?: string;
  score?: string;
  age?: string;
  clazz: Clazz;
}
