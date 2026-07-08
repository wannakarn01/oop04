class House{
    constructor(public name:string, public room:number, public bath:number, public area:number,public price:number){
    }
    showDetails():void{
        console.log(`แบบบ้าน ${this.name} ${this.room} ห้องนอน ${this.bath}ห้องน้ำ พื้นที่ ${this.area}ตารางเมตร ราคา ${this.price}บาท`);
    }
    adjustprice(newprice: number){
        this.price = newprice;
    }
}
let House1 = new House("คนไทย",4,3,150,2300000);
House1.showDetails();
House1.adjustprice(18000000.);
House1.showDetails();