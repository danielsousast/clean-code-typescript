import { Cpf } from "./Cpf";

export class Order {
  cpf: any;
  constructor(cpf: string) {
    this.cpf = new Cpf(cpf);
  }

  getTotal() {
    return 0;
  }
}
