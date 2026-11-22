abstract class Student 
{
marks:number 

constructor(marks:number)
{
    this.marks=marks;
}

   abstract score():void
  showmarks()
    {
    console.log(" The marks are above 70");
    }

}

class B extends Student
{
    score()
    
    {
      console.log(" The score is good");
    }
}

let test = new B(55);
test.score();
test.showmarks();