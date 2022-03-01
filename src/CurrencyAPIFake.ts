import { CurrencyAPI } from "./CurrencyAPI";

export class CurrencyAPIFake implements CurrencyAPI {
  convert(amount: number, currency: string): number {
    return amount * 5;
  }
}
