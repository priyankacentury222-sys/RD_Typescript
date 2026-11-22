export {};

let arr: number[] = [1, 7, 3, 9, 5];

//let  max :number= arr[0];
let max: number = -Infinity; 

for(let i =1;i<arr.length;i++)
{

    if(max<arr[i])
    {
        max=arr[i];
    }

}
    console.log(" The max is " + max); 

   
