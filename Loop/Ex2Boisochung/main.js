function sumMultiplesOf3and5(n) {
  let sum = 0;
  for (let i = 3; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumMultiplesOf3and5(1000))