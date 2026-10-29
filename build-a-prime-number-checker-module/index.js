function isPrime(anyNumber){
    
    if(anyNumber <=1 ) { return false};
    if(anyNumber === 2) { return false};
    if ( anyNumber% 2 === 0  ) { return false};

     for (let i = 3; i <= Math.sqrt(anyNumber); i += 2) {
        if (anyNumber % i === 0) return false;
    }
    return true;
};

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(5));
console.log(isPrime(10));
console.log(isPrime(17));

module.exports  = {
    isPrime
};

