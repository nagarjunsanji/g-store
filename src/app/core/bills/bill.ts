export class Bill {
    customerName:string;
    total:number = 0;
    items:Item[] = [];
}

export class Item {
    name:string;
    weight:number = 0;
    price:number = 0;
    total:number = 0;
}
