
class Test
{

     x:number;
     y:number;

     constructor()
     constructor(x:number)
     constructor(x:number,y:number)

constructor(x?:number,y?:number)
{
    this.x=x??0;
     this.y=y??0;

}


}

let obj1 =new Test();
console.log(obj1);

let obj2 =new Test(3);
console.log(obj2);

let obj3 =new Test(3,5);
console.log(obj3);


