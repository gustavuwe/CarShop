import { v4 as uuidV4 } from 'uuid'

class Item {
    id?: string;
    name: string;
    value: number;
    created_at: Date;


constructor() {
    if(!this.id) {
        this.id = uuidV4();
        }
    }
}

export { Item }