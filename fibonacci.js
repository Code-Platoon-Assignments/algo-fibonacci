function fibonacci(num){
  let fib1 = 0
  let fib2=1
  let fib = 0

  if(num <=1) return num;

  for(let i = 2; i <= num; i++){
      fib = fib1 + fib2
      fib1 = fib2
      fib2 = fib
  }
  return fib
}

module.exports = fibonacci;
