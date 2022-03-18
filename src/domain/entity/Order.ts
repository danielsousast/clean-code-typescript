import { Coupon } from "./Coupon";
import { Cpf } from "./Cpf";
import { FreightCalculator } from "./FreightCalculator";
import { Item } from "./Item";
import { OrderCode } from "./OrderCode";
import { OrderItem } from "./OrderItem";

export class Order {
  cpf: Cpf;
  orderItems: OrderItem[];
  coupon: Coupon | undefined;
  date: Date;
  code: OrderCode;
  private freight: number;

  constructor(cpf: string, date: Date = new Date(), sequence: number = 1) {
    this.cpf = new Cpf(cpf);
    this.orderItems = [];
    this.date = date;
    this.freight = 0;
    this.code = new OrderCode(date, sequence)
  }

  getCode() {
    return this.code.value;
  }

  addItem(item: Item, quantity: number) {
    const freight = FreightCalculator.calculate(item);
    this.freight = freight * quantity;
    this.orderItems.push(
      new OrderItem({
        id: item.id,
        price: item.price,
        quantity,
      })
    );
  }

  addCoupon(coupon: Coupon) {
    if (coupon.isValid(this.date)) {
      this.coupon = coupon;
    }
  }

  getFreight() {
    return this.freight;
  }

  getTotal() {
    let total = 0;
    for (const orderItem of this.orderItems) {
      total += orderItem.getTotal();
    }
    if (this.coupon) {
      const discount = (total * this.coupon.percentage) / 100;
      total -= discount;
    }
    return total;
  }
}
