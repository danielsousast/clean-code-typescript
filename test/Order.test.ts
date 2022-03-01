import { Coupon } from "../src/Coupon";
import { Item } from "../src/Item";
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

test("should make a order with 3 items", function () {
  const validCpf = "658.465.400-15";
  const order = new Order(validCpf);
  const item1 = new Item({
    id: 1,
    category: "Música",
    description: "CD",
    price: 30,
  });
  const item2 = new Item({
    id: 1,
    category: "Vídeo",
    description: "DVD",
    price: 30,
  });
  const item3 = new Item({
    id: 1,
    category: "Vídeo",
    description: "VHS",
    price: 30,
  });
  order.addItem(item1, 1);
  order.addItem(item2, 2);
  order.addItem(item3, 3);
  expect(order.getTotal()).toBe(180);
});

test("should make a order with discount coupon", function () {
  const validCpf = "658.465.400-15";
  const order = new Order(validCpf);
  const item = new Item({
    id: 1,
    category: "Música",
    description: "CD",
    price: 100,
  });
  order.addItem(item, 1);
  order.addCoupon(new Coupon("VALE20", 20));
  expect(order.getTotal()).toBe(80);
});
