import { PlaceOrder } from "../../src/application/usecase/PlaceOrder";
import { CouponrepositoryMemory } from "../../src/infraestructure/repository/memory/CouponRepositoryMemory";
import { ItemRepositoryMemory } from "../../src/infraestructure/repository/memory/ItemRepositoryMemory";
import { OrderRepositoryMemory } from "../../src/infraestructure/repository/memory/OrderRepositoryMemeory";

const makeInputData = () => {
    return {
        cpf: '839.435.452-10',
        orderItems: [
            {idItem: 1, quantity: 1},
            {idItem: 2, quantity: 2},
        ],
        date: new Date('01/01/2022'),
        coupon: 'VALE20'
    }
}

test('should make an order', async () => {
    const itemRepository = new ItemRepositoryMemory();
    const orderRepository = new OrderRepositoryMemory();
    const couponRepository = new CouponrepositoryMemory();
    const input = makeInputData()
    const placeOrderUC = new PlaceOrder(itemRepository, orderRepository, couponRepository);
    const output = await placeOrderUC.execute(input);
    expect(output.total).toBe(300);
});

test('should make an order with code', async () => {
    const itemRepository = new ItemRepositoryMemory();
    const orderRepository = new OrderRepositoryMemory();
    const couponRepository = new CouponrepositoryMemory();
    const input = makeInputData()
    const placeOrderUC = new PlaceOrder(itemRepository, orderRepository, couponRepository);
    const output = await placeOrderUC.execute(input);
    expect(output.code).toBe('202200000001');
});