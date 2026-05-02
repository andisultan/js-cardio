// a prime number is only divisible by 1 and itself

function isPrime(num) {
  // handle edge cases
  if (num <= 1) return false;
  if (num === 2) return true;

  // eliminate even numbers
  if (num % 2 === 0) return false;

  // check up to sqrt(num)
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}