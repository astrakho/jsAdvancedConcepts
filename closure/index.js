// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
// In other words, a closure gives you access to an outer function’s scope from an inner function.
// In JavaScript, closures are created every time a function is created, at function creation time.

// function createCalcFunction(n) {
//   return function() {
//     console.log(1000 * n)
//   }
// }

// const calc = createCalcFunction(42)

// console.log(calc)

// calc()

// function createIncrementor(n) {
//   return function(num) {
//     return n + num
//   }
// }

// const addOne = createIncrementor(1)
// addTen = createIncrementor(10)

// console.log(addOne(10))
// console.log(addOne(41))

// console.log(addTen(10))
// console.log(addTen(41))

// function urlGenerator(domain) {
//   return function(url) {
//     return `https://${url}.${domain}`
//   }
// }

// const comUrl = urlGenerator('com')
// const ruUrl = urlGenerator('ru')

// console.log(comUrl('google'))
// console.log(comUrl('netflix'))

// console.log(ruUrl('yandex'))
// console.log(ruUrl('vk'))

//Challenge 

/*
  Write bind function
  Working Example:

  function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
  }

  const person1 = {name: 'Alex', age: 24, job: 'Frontend'}
  const person2 = {name: 'Alice', age: 24, job: 'Scrum Master'}

  bind(person1, logPerson)
  bind(person2, logPerson)
*/

function bind(context, fn) {
  return function(...args){
    fn.apply(context, args)
  }
}

function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name: 'Alex', age: 24, job: 'Frontend'}
const person2 = {name: 'Alice', age: 24, job: 'Scrum Master'}

bind(person1, logPerson)()
bind(person2, logPerson)()