class Amimal
{

    Dog()
    {
        console.log("Dog barks");
    }

}
    class  cat extends Amimal 
    {
 

        cat()
        {
            console.log("Cat is hungry");
        }

    }

    class vechile extends cat
    {
         car()
         {
            console.log("I am driving a car");
         }
    }


let test2 =new vechile();

test2.car();
test2.cat();
test2.Dog();