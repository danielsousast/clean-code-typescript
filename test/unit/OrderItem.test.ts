import { OrderItem } from "../../src/domain/entity/OrderItem";

test("should make a order item", function () {
  const orderItem = new OrderItem({
    id: 1,
    price: 100,
    quantity: 10,
  });
  expect(orderItem.getTotal()).toBe(1000);
});
