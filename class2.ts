class car{
    brand: string;
    model: string;
    type: string;
    engine:number;
    door:number;
    price:number

    constructor(b:string, m:string , t:string, e:number , d:number ,p:number ){
        this.brand= b;
        this.model =m; 
        this.type= t;
        this.engine= e;
        this.door= d;
        this.price=p;
    }
    display():void{
        console.log(`รถ ยี่ห้อ ${this.brand} รุ่น ${this.model} ประเภท ${this.type} เครื่องยนต์ ${this.engine}ซีซี ${this.door}ประตู ${this.price}บาท`);
    }
}
let c1 = new car ("Toyota","Camry","เก๋ง",2000,4,2500000);
let c2 = new car ("Isuzu","Mu x","กระบะ",2500,5,3000000);

c1.display();
c2.display();