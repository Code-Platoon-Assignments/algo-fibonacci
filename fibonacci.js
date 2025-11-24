// let fibo = [0, 1]; // doesn't work in jest test
function fibonacci(num) {
  let fibo = [0, 1]; //works in jest test
  if (num === 0) return fibo[0];
  if (num === 1) return fibo[1];

  for (let i = 2; i <= num; i++) {
    let nextIndex = fibo[i - 2] + fibo[i - 1];
    fibo.push(nextIndex);
  }

  return fibo[num];
}

console.log(fibonacci(7))
module.exports = fibonacci;