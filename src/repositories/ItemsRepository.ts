import { Item } from '../model/Items'

interface ICreateItemDTO {
    name: string;
    value: number;
}

class ItemsRepository {
    private items: Item[];

    constructor() {
        this.items = [];
    }
    create({ value, name }: ICreateItemDTO): void {
        const item = new Item();

        Object.assign(item, {
            name,
            value,
            created_at: new Date()
        })

        this.items.push(item)
    }

    list(): Item[] {
        return this.items
    }

    deleteItem() {
        const item = new Item();
        this.items.splice(item, 1);
    }

    sumOfAll() {
        let soma = 0 

    for(let i = 0; i < this.items.length; i++) {
        soma += Number(this.items[i].value)
}
    return soma
        // const total = this.items.reduce((acumulador, item) => acumulador + Number(item.value), 0)
    }
}

export { ItemsRepository }
