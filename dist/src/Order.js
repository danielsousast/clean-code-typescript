"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const Cpf_1 = require("./Cpf");
class Order {
    constructor(cpf) {
        this.cpf = new Cpf_1.Cpf(cpf);
    }
    getTotal() {
        return 0;
    }
}
exports.Order = Order;
