
class Dog
{

    sound():void
    {
        console.log("Dog barks");
    }
}

    class cate extends Dog 
    {

        sound():void
        {
            console.log("Cat mew");
        }



    }

let demo2 =new cate();
demo2.sound();

