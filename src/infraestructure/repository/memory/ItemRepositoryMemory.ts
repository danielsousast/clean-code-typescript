import { Item } from "../../../domain/entity/Item";
import { ItemRepository } from "../../../domain/repository/ItemRepository";

const makeItem = (id: number): Item => {
    return  new Item({
      id,
      category: "any_category",
      description: "any_description",
      price: 100,
      weight: 100,
      height: 100,
      width: 100,
      length: 100,
    });
  };

export class ItemRepositoryMemory implements ItemRepository {
    itens: Item[];

    constructor() {
        this.itens = [
            makeItem(1),
            makeItem(2),
            makeItem(3)
        ];
    }
    async findById(idItem: number): Promise<Item | undefined> {
        return Promise.resolve(this.itens.find(item => item.id === idItem));
    }
}