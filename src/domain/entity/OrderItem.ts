interface OrderItemParams {
  id: number;
  price: number;
  quantity: number;
}

export class OrderItem {
  id: number;
  price: number;
  quantity: number;

  constructor(params: OrderItemParams) {
    this.id = params.id;
    this.price = params.price;
    this.quantity = params.quantity;
  }

  getTotal() {
    return this.price * this.quantity;
  }
}
