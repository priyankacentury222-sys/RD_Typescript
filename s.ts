class Animal
{

    eat()
    {
        console.log(" The dog is eating")
    }
}
    
class Dog extends Animal
    {

    bark()
    {
        console.log("Dog is barking");
    }
    
} 

    let d1 =new Dog();
    d1.eat();
    d1.bark();

    