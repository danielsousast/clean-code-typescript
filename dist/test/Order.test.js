"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Order_1 = require("../src/Order");
test("should make a order with valid cpf", function () {
    const validCpf = "658.465.400-15";
    const order = new Order_1.Order(validCpf);
    const total = order.getTotal();
    expect(total).toBe(0);
});
test("should make a order with invalid cpf", function () {
    const invalidCPF = "111.111.111-11";
    expect(() => new Order_1.Order(invalidCPF)).toThrow(new Error("Invalid cpf"));
});
