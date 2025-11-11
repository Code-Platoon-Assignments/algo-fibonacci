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
console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(5))
console.log(fibonacci(8))
console.log(fibonacci(11))