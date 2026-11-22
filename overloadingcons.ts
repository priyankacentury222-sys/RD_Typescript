//overloadingcons


class overloading 
{

    name:string;
    marks:number;
    //age: number;


    constructor()
    constructor(name:string)
    constructor(name:string,marks:number)

    constructor(name?:string,marks?:number)
     {
      this.name=name??"";
     this.marks=marks??0;

   

   }
}

let obj1 =new overloading()
let obj2=new overloading("Sam");
let obj3=new overloading("Sam",80);

console.log(obj1);
console.log(obj2);
console.log(obj3);