## Pretyy Fibonacci Walk Thru

1. Given I have 2 base numbers to start with because fib(0) = 0 and fib(1) = 1
0,1 

These are our starting numbers 

fib1 = 0
fib2 = 1

2. Given we already know what fib(0) and fib(1) is 
we can always return their fibonacci number as itself

if(num <=1 ) return num;  

3. Given we need to start with fib(2) and we are starting at 2 since fib(0) and fib(1) are covered
and I need to loop through until I reach the number given. 

for(let i = 2; i<= num; i++)

4. fibonacci is the sum of the last 2 numbers 
fib = fib1+fib2  

5. Update numbers after every iteration

 fib1 = fib2 
 fib2 = fib 

 6. the for loop will increase based on i until it gets to the num passed in and return the final sum - fibonacci

 return fib