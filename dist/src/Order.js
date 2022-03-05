"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const Cpf_1 = require("./Cpf");
const FreightCalculator_1 = require("./FreightCalculator");
const OrderItem_1 = require("./OrderItem");
class Order {
    constructor(cpf, date = new Date()) {
        this.cpf = new Cpf_1.Cpf(cpf);
        this.orderItems = [];
        this.date = date;
        this.freight = 0;
    }
    addItem(item, quantity) {
        const freight = FreightCalculator_1.FreightCalculator.calculate(item);
        this.freight = freight * quantity;
        this.orderItems.push(new OrderItem_1.OrderItem({
            id: item.id,
            price: item.price,
            quantity,
        }));
    }
    addCoupon(coupon) {
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
exports.Order = Order;
