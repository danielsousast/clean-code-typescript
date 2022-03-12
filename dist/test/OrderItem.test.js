"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OrderItem_1 = require("../src/domain/entity/OrderItem");
test("should make a order item", function () {
    const orderItem = new OrderItem_1.OrderItem({
        id: 1,
        price: 100,
        quantity: 10,
    });
    expect(orderItem.getTotal()).toBe(1000);
});
