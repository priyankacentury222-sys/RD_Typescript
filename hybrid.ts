class A

{

    mood()
    {
        console.log(" I am happy today");
    }

}
class B extends A
{
    demo()
    {
        console.log("Today is a demo");
    }

}

class C extends B
{

    climate()
    {
        console.log("Today is cloudy");
    }
}

class D extends A{

    exam()
    {
        console.log("Today is my exam");
    }
}

let d1 =new D();
d1.exam();
d1.mood();

let c1 =new C();
c1.climate()
c1.demo();
c1.mood();
