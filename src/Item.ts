interface ItemParams {
  id: number;
  description: string;
  category: string;
  price: number;
}

export class Item {
  id: number;
  description: string;
  category: string;
  price: number;

  constructor(readonly params: ItemParams) {
    this.id = params.id;
    this.description = params.description;
    this.category = params.category;
    this.price = params.price;
  }
}
