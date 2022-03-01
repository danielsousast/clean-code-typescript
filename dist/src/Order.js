"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const Cpf_1 = require("./Cpf");
const OrderItem_1 = require("./OrderItem");
class Order {
    constructor(cpf) {
        this.cpf = new Cpf_1.Cpf(cpf);
        this.orderItems = [];
    }
    addItem(item, quantity) {
        this.orderItems.push(new OrderItem_1.OrderItem({
            id: item.id,
            price: item.price,
            quantity,
        }));
    }
    addCoupon(coupon) {
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
exports.Order = Order;
