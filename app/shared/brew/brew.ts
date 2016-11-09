import { Status } from '../statusEnum';

export class Brew {
  id: string;
  name: string;
  style: string;
  status: Status;
  statusString: string;
}