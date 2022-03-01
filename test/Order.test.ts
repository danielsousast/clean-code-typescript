import { Order } from "../src/Order";

test("should make a order with valid cpf", function () {
  const validCpf = "658.465.400-15";
  const order = new Order(validCpf);
  const total = order.getTotal();
  expect(total).toBe(0);
});

test("should make a order with invalid cpf", function () {
  const invalidCPF = "111.111.111-11";
  expect(() => new Order(invalidCPF)).toThrow(new Error("Invalid cpf"));
});
