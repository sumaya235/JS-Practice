function isEven(number){
    if (number%2 == 0){
        return true
    }
    else{
        return false
    }
}
var myEvenNumber= isEven(130);
console.log("this even number is : " , myEvenNumber);


function isOdd(number){
    if( number%2 != 0 ){
        return true;

    }
    return false;
    

}
 const myOddNumber = isOdd(100) ;

 console.log("my odd number is :", myOddNumber);

function evenOrOdd(number){
    if (number % 2==0){
        return "even"
    }
    else{
        return "odd"
    }
}
const myNumber= evenOrOdd(151);
console.log("this number is : " ,myNumber)