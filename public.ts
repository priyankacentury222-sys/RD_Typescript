class test 
{

    public name:string="Kiran";
 show()
 {
    console.log(this.name)

 }


}

class B extends test 
{

    display()
    {

    console.log(this.name)
    }

}

let ab = new B();
ab.display();
ab.show();
