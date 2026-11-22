class Testing

{

    protected name :String="kerry";

    

    display()
    {
        console.log(this.name);
    }

}
class testB extends Testing
{

    showtest()
    {
        console.log(this.name);
    }

}

let result =new testB();
result.display();
result.showtest();