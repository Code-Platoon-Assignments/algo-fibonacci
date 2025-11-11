let nextFib = 0;

function fibonacci(num) {
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  // if (num < 2) {
  //   return num;
  // }

  let a = 0;
  let b = 1;

  for (let i = 2; i <= num; i++) {
    nextFib = a + b;

    a = b;
    b = nextFib;
  }

  console.log(`The ${num}th number of the Fibonacci Sequence is ${nextFib}`)
  return b;
}

fibonacci(20);

module.exports = fibonacci;

// Your challenge today is to write an algorithm that, given a number n, return the n-th Fibonacci Number. 
// Keep in mind that the first two numbers in the fibonacci sequence are always [0,1]
//F(n) = F(n-1) + F(n-2)
