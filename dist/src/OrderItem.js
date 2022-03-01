"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItem = void 0;
class OrderItem {
    constructor(params) {
        this.id = params.id;
        this.price = params.price;
        this.quantity = params.quantity;
    }
    getTotal() {
        return this.price * this.quantity;
    }
}
exports.OrderItem = OrderItem;
