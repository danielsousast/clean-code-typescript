import { Order } from "../../../domain/entity/Order";
import { OrderRepository } from "../../../domain/repository/OrderRepository";

export class OrderRepositoryMemory implements OrderRepository {
    orders: Order[]

    constructor(){
        this.orders = [];
    }

    save(order: Order) {
        this.orders.push(order)
    }
}