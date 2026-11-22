
function Findfactorial(n:number)
{

    

    if(n<0)
        
    {
        console.log("This is a negative number");
    }

    let factorial: number= 1;
    for(let i=1;i<=n;i++)
    {

        factorial=factorial*i;
    }

    return factorial;


    }

    console.log(Findfactorial(4));



