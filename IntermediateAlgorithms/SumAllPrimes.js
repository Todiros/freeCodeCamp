function isPrime (n)
{
    if (n < 2) return 0;

    var q = Math.floor(Math.sqrt(n));

    for (var i = 2; i <= q; i++)
    {
        if (n % i === 0)
        {
            return 0;
        }
    }

    return 1;
}

function sumPrimes(num) {
  let primes = [];
  
  for (let i = 2; i <= num; i++) {
    if(isPrime(i)) {
      primes.push(i);
    }
  }
  
  return primes.reduce((a, b) => a + b, 0);
}

sumPrimes(977);