const people = [
  { name: 'Alex', age: 24, budget: 40000 },
  { name: 'Laura', age: 25, budget: 3400 },
  { name: 'Nick', age: 10, budget: 50000 },
  { name: 'Ron', age: 5, budget: 1800 },
  { name: 'Ben', age: 30, budget: 25000 },
  { name: 'Anton', age: 27, budget: 2300 }
]

// ES5
// for (let i = 0; i < people.length; i++) {
//   console.log(people[i])
// }

//ES 6
// for (let person of people) {
//   console.log(person)
// }

// ForEach
// people.forEach(function(person) {
//   console.log(person)
// })
// people.forEach(person => console.log(person))

// Map
// const newPeople = people.map(person =>  person.age * 3)
// console.log(newPeople)

// Filter
// const adults = []
// for (let i = 0; i < people.length; i++) {
//   if(people[i].age >= 18) {
//     adults.push(people[i])
//   }
// }
// console.log(adults)
// const adults = people.filter(person => person.age >= 18)
// console.log(adults)

// Reduce
// let amount = 0
// for (let i = 0; i < people.length; i++) {
//   amount += people[i].budget
// }
// console.log(amount)
// const amount = people.reduce((total, person) => total + person.budget, 0)
// console.log(amount)

// Find
// console.log(people.find(person => person.name === 'Laura'))

// FindIndex
// console.log(people.findIndex(person => person.name === 'Laura'))

// ===========

const amount = people
  .filter(person => person.budget > 3000)
  .map(person => {
    return {
      info: `${person.name} (${person.age})`,
      budget: Math.sqrt(person.budget)
    }
  })
  .reduce((total, person) => total + person.budget, 0)


console.log(amount)
