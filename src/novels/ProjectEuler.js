// Largest prime factor

// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

function isPrime(num) {
  const x = Math.floor(Math.sqrt(num));

  if (Math.floor(num) !== num) {
    return false;
  }

  for (let i = 2; i <= x; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return num >= 2;
}

function problem3Simple(num = 600851475143) {
  for (let i = Math.floor(Math.sqrt(num)); i > 0 / 2; i -= 1) {
    if (num % i === 0 && isPrime(i)) {
      return i;
    }
  }
}

console.log(problem3Simple());
