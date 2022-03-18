import { OrderCode } from "../../src/domain/entity/OrderCode";

test('make a order code', () => {
    const date = new Date('01/01/2022');
    const orderCode = new OrderCode(date, 777);
    expect(orderCode.value).toBe('202200000777');
});