class twoparameter

{

    marks:number;
    name:String;

    constructor(marks:number,name:string)
    {
        this.marks=marks;
        this.name=name;

        console.log("Marks are good")

    }

}

let obj = new twoparameter(60,"Sam");
console.log(obj);
