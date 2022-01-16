const genkiFunction = function (number) {
  for (let n = 1; n <= number; n++) {
    if (n % 15 === 0) {
      console.log(`FizzBuzzz`)
    } else if (n % 3 === 0) {
      console.log(`Fizz`)
    } else if (n % 5 === 0) {
      console.log(`Bizz`)
    } else {
      console.log(n)
    }
  }
}
