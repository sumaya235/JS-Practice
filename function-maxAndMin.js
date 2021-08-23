// to get man number
function getMaxNumber(first,second,third){
    if(first>second && first>third ){
        return "first number is max" 
    }
    else if( second>first && second>third){
        return  "second number is max" 
    }
    else{
        return  "third number is max" 
    }
}

const maxNum= getMaxNumber(100,200,300);
console.log(maxNum);

// to get min number 
function getMinNum(first,second,third){
    if(first<second && first<third){
        return "first number is min"
    }
    else if(second<first && second<third){
        return "second number is min"
    }
    else{
        return "third number is min"
    }
}
const minNum=getMinNum(100,200,300);
console.log(minNum);

// to get middle number
function getMiddleNumber(first,second,third){
    if((first>second && first<third ) || (first>third && first<second)){
        return "first number is middle" 
    }
    else if((second>first && second<third ) || (second>third && second<first)){
        return  "second number is middle" 
    }
    else{
        return  "third number is middle" 
    }
}

const middleNum= getMiddleNumber(100,200,300);
console.log(middleNum);



