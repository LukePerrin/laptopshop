export class ConfigSelection {
    ramCode: string;
    hardDiskCode: string;
    colourCode: string;
    cpuCode: string;
    colourDescription: string;    
    cpuDescription: string;
    ramprice: number;
    hddprice: number;
    colourprice: number;
    cpuprice: number;
    totalPrice: number;
    description: string;
    image: string;
    basePrice: number;

    constructor()
    {
        this.totalPrice = 0;
        this.ramCode = "";
        this.hardDiskCode = "";
        this.colourCode = "";      
        this.cpuCode = "";
        this.image = "";
        this.description = "";
    }
}