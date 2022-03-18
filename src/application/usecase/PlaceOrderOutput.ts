interface OrderItem {
    idItem: number;
    quantity: number;
}

export class PlaceOrderOutput
 {
    constructor(readonly total: number, readonly code: string) {
        
    }
}