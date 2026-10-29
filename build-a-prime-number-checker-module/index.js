function isPrime(anyNumber){
    
    if(anyNumber <=1 ) { return false};
    if(anyNumber === 2) { return true};
    if ( anyNumber% 2 === 0  ) { return false};

     for (let i = 3; i <= Math.sqrt(anyNumber); i += 2) {
        if (anyNumber % i === 0) return false;
    }
    return true;
};

console.log(isPrime(2));

console.log(isPrime(5));



module.exports  = {
    isPrime
};

