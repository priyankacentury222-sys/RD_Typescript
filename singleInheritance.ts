class A 
{

    //marks:number=89;

    climate()
    {
        console.log("Today is cloudy");
        //console.log(this.marks);

    }
}

class B extends A 


{
    marks:number=89;
    mood()
    {
        console.log("I have a good mood today");
        console.log(this.marks);

    }
}



let b1 =new B();
b1.mood();
b1.climate()

