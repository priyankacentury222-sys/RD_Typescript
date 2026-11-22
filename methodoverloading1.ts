
class over 
{

    add(a:number,b:number):number

    add(a:number,b:number,c:number):number

    add(a: number, b: number, c?: number): number
    {
        return c ? a+b+c:a+b;

    }

}

let demo =new over();
console.log(demo.add(3,8));
console.log(demo.add(3,8,2));





