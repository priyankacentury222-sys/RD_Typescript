

interface colour
{
     select():void
     
}
interface car
{
    drive():void
}
class Test implements colour,car
{
    select()
    {
        console.log("Red colour");
    }

    drive()
    {
        console.log("I am driving");
    }

}
       let t  =new Test();
         t.drive();
         t.select();
