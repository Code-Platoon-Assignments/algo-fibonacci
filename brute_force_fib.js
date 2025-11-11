function fibonacci(num) {
  /* this is an independent js - brute force - making
     the solution work
  1. declare the 2 variables that will hold our numbers
    previous_number = 0 and current_number = 1 are our base cases - starting
    point
  2. constants: we know 0 is going to return 0 and 1 will return 1 */
  let previous_number = 0;
  let current_number = 1;
  let fib = 0; //the fibonaccio result starting at 0
  if(num === 0){
    return fib // 0
  }
  else if(num == 1){
    return fib +1 // fancy for 1
  }
  //starting at i=2 ; loop will run until i increments
  //up to < = num  
  for(let i =2; i <=num; i++) {
    //i=2 is going to return sum of base numbers first
    //iteration
    fib = previous_number + current_number; 
    //update previous_number with current_number for next iteration
    previous_number = current_number;
    //update current number with fib (sum of previous + current)
    current_number = fib
    //this will iterate thru ntil i ===num
  }
  return fib
    
  }
 //these will run when you type in node brute_force_fib.js in terminal 
console.log(fibonacci(0))
console.log(fibonacci(2))
console.log(fibonacci(5))
console.log(fibonacci(8))
console.log(fibonacci(11))