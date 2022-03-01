"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    constructor(params) {
        this.params = params;
        this.id = params.id;
        this.description = params.description;
        this.category = params.category;
        this.price = params.price;
    }
}
exports.Item = Item;
