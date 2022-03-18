import { Order } from "../../../domain/entity/Order";
import { OrderRepository } from "../../../domain/repository/OrderRepository";

export class OrderRepositoryMemory implements OrderRepository {
    orders: Order[]

    constructor(){
        this.orders = [];
    }
    
    count(): Promise<number> {
        return Promise.resolve(this.orders.length)
    }

    save(order: Order) {
        this.orders.push(order)
    }

    
}