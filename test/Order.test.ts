import { Coupon } from "../src/Coupon";
import { Item } from "../src/Item";
import { Order } from "../src/Order";

const makeItem = (): Item => {
  const item = new Item({
    id: 1,
    category: "any_category",
    description: "any_description",
    price: 100,
    weight: 100,
    height: 100,
    width: 100,
    length: 100,
  });
  return item;
};

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
  const item1 = makeItem();
  const item2 = makeItem();
  const item3 = makeItem();
  order.addItem(item1, 1);
  order.addItem(item2, 2);
  order.addItem(item3, 3);
  expect(order.getTotal()).toBe(600);
});

test("should make a order with discount coupon", function () {
  const validCpf = "658.465.400-15";
  const order = new Order(validCpf);
  const item = makeItem();
  order.addItem(item, 1);
  order.addCoupon(new Coupon("VALE20", 20));
  expect(order.getTotal()).toBe(80);
});

test("should ignore expired discount coupon", function () {
  const validCpf = "658.465.400-15";
  const order = new Order(validCpf, new Date("2022-01-10"));
  const item = makeItem();
  order.addItem(item, 1);
  const coupon = new Coupon("VALE20", 20, new Date("2022-01-01"));
  order.addCoupon(coupon);
  expect(order.getTotal()).toBe(100);
});

test("should make a order and calculate frete", function () {
  const validCpf = "658.465.400-15";
  const order = new Order(validCpf, new Date("2022-01-10"));
  order.addItem(makeItem(), 1);
  expect(order.getFreight()).toBe(1000);
});

test("should make a order and calculate frete with minimum value", function () {
  const cpf = "658.465.400-15";
  const order = new Order(cpf, new Date("2022-01-10"));
  const item = new Item({
    id: 1,
    category: "any_category",
    description: "any_description",
    price: 10,
    weight: 0.5,
    height: 0.1,
    width: 0.5,
    length: 0.5,
  });
  order.addItem(item, 1);
  expect(order.getFreight()).toBe(10);
});
