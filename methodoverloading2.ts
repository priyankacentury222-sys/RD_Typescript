
class overloading 
{

    add(a:number,b:number):void

    add(str1:string,str2:string):void

    add(a: any, b: any):void
    {
        let  sum =a+b;
        console.log(sum);

    }

}

let demo1 =new overloading();
demo1.add(4,7);

demo1.add("Hello","Bangalore");







