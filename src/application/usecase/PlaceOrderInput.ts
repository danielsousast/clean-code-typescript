interface OrderItem {
    idItem: number;
    quantity: number;
}

export class PlaceOrderInput {
    constructor(readonly cpf: string, readonly orderItems: OrderItem[], readonly date: Date, readonly coupon?: string) {
        
    }
}