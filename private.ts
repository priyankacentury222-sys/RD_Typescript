class testdemo
{

    private score:number=87;

    showscrore()
    {
        console.log(this.score);
    }

}

class B extends testdemo
{

    showtest()
    {
        console.log("This is a score" );
        //console.log(this.score);  // Not allowed outside the class

    }
}

let ob1=new B();
ob1.showscrore()
