// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
// this shows the object, in wich context this was called
function hello() {
  console.log('Hello', this)
}

const person = {
  name: 'Alex',
  age: 24,
  sayHello: hello,
  sayHelloWindow: hello.bind(document),
  logInfo: function (job, phone){
    console.group(`${this.name} info:`)
    console.log(`Name is ${this.name}`)
    console.log(`Age is ${this.age}`)
    console.log(`Job is ${job}`)
    console.log(`Phone is ${phone}`)
    console.groupEnd()
  }
}

const alice = {
  name: 'Alice',
  age: 23
}

// bind does not call a function
// person.logInfo.bind(alice, 'Frontend', '7777777')()
// person.logInfo.call(alice, 'Frontend', '7777777' )
person.logInfo.apply(alice, ['Frontend', '7777777'])

/// ==========

const array = [1,2,3,4,5]

// function multBy(arr, n) {
//   return arr.map(function(i){
//     return i * n
//   })
// }

Array.prototype.multBy = function(n) {
  return this.map(function(i){
    return i * n
  })
}

console.log(array.multBy(20))