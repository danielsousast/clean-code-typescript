import { Item } from "./Item";

export class FreightCalculator {
  static calculate(item: Item) {
    const freight = (1000 * item.getVolume() * item.getDensity()) / 100;
    if (freight < 10) return 10;
    return freight;
  }
}
