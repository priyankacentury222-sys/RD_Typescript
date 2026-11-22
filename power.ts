

function findpowerofanumber():void
{

const base : number =3;
const power: number=3;
let result: number =1;
let i : number =0;

while(i<power)
{
    result= result*base;
    i++;

}

console.log("The result is : " + result);
}

findpowerofanumber();


