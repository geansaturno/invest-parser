export class Titulo {
    buy: number;
    sell: number;

    constructor(buy: number, sell: number) {
        this.buy = buy;
        this.sell = sell;
    }

    getBuyPrice(){
        return this.buy;
    }

    getSellPrice() {
        return this.sell;
    }
}