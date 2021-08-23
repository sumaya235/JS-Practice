// example of factorial
// 1!=1*1 
// 2!=2*1 
// or, 2!= 2*1! 

// 3!=3*2*1 
// or, 3!= 3*2!

// 4!=4*3*2*1
// 5!= 5*4*3*2*1
// or, 5!= 5*4!

// 6!= 6*5*4*3*2*1

// normal factorial with while loop 

    var factorial= 1;
    var i =1;
    while(i<=7){
       
        factorial=factorial*i;
        i++
      
    }
    console.log(factorial);


// normal factorial with for loop 

var factorial = 1;
for(var i=1 ; i<=7 ; i++){
    factorial = factorial * i ;
}
console.log(factorial); 


// factorial function with while loop

function getFactorial(number){
    let factorial = 1;
    let i = 1;
    while(i<=number){
        factorial=factorial*i;
        i++;
    }
    return factorial;
}

const myNumber1 = getFactorial(7);
console.log(myNumber1);


// factorial function with for loop

function getFactorial(number){
    let factorial = 1;
  for(var i=1 ; i<=number ; i++){
    factorial = factorial * i ;
}
   
    return factorial;
}

const myNumber2 = getFactorial(7);
console.log(myNumber2);


