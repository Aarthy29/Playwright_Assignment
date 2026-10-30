//Given number is positive, negative or zero

function numtype(number)
{
    if (number > 0)
    {
        return "Postive Number";
    }

  else  if(number < 0)
    {
        return "negative number";
    }

    else 
    {
        return "zero";
    }
}

let num = -100;
let result = numtype(num);
console.log(result);
