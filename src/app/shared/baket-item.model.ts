export class BasketItem{
    public model: string;
    public imagPath: string;
    public amount: number;

    constructor(model: string, imagpath: string, amount: number){
        this.model = model;
        this.imagPath = imagpath;
        this.amount = amount;
    }

}