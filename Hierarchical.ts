
class Animal
{
    Sheep()
    {
        console.log("wool is made from Sheep ")
    }
}

class Student extends Animal
{
    marks()
    {
        console.log("Marks are not good");
    }
}

class vechile extends Animal
{
    Truck()
    {
        console.log("Truck is used to carry the heavy items");
    }
}


 let testing = new vechile();

testing.Sheep();
testing.Truck();


let test2 =new Student();
test2.marks();
