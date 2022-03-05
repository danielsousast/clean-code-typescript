interface ItemParams {
  id: number;
  description: string;
  category: string;
  price: number;
  weight: number;
  height: number;
  width: number;
  length: number;
}

export class Item {
  id: number;
  description: string;
  category: string;
  price: number;
  weight: number;
  height: number;
  width: number;
  length: number;

  constructor(readonly params: ItemParams) {
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
