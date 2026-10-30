function power(a, n) {
  if (n === 0) return 1
  return a * power(a, n - 1) }
console.log(power(2, 0))
console.log(power(2, 3))
console.log(power(3, 2))
console.log(power(5, 3))
