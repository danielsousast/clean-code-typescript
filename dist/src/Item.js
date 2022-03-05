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
        this.weight = params.weight;
        this.height = params.height;
        this.width = params.width;
        this.length = params.length;
    }
    getVolume() {
        return (this.width / 100) * (this.length / 100) * (this.height / 100);
    }
    getDensity() {
        return this.weight / this.getVolume();
    }
}
exports.Item = Item;
