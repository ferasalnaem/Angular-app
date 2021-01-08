import { BasketItem } from "./baket-item.model";

export class Item{
    public model: string;
    public description: string;
    public imagePath: string;
    public display: string;
    public memory: number;
    public camera: string;
    public baketItem: BasketItem[];

    constructor(model: string, desc: string, imagePath: string, display: string, memory: number, camera:string, basketItem: BasketItem[]){
        this.model = model;
        this.description = desc;
        this.imagePath = imagePath;
        this.display = display;
        this.memory = memory;
        this.camera = camera;
        this.baketItem = basketItem;
        
    }
}