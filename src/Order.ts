import { Coupon } from "./Coupon";
import { Cpf } from "./Cpf";
import { Item } from "./Item";
import { OrderItem } from "./OrderItem";

export class Order {
  cpf: Cpf;
  orderItems: OrderItem[];
  coupon: Coupon | undefined;

  constructor(cpf: string) {
    this.cpf = new Cpf(cpf);
    this.orderItems = [];
  }

  addItem(item: Item, quantity: number) {
    this.orderItems.push(
      new OrderItem({
        id: item.id,
        price: item.price,
        quantity,
      })
    );
  }

  addCoupon(coupon: Coupon) {
    this.coupon = coupon;
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
