// The following Tutorial Explores Prototypes in JavaScript

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

// When it comes to inheritance, JavaScript only has one construct: objects.
// Each object has a private property which holds a link to another object called its prototype.
// That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.
// By definition, null has no prototype, and acts as the final link in this prototype chain.

const person = new Object({
  name: 'Alex',
  age: 24,
  greet: function(){
    console.log('Greet!')
  }
})

// IMPORTNAT: The native prototypes should never be extended unless it is for the sake of compatibility with newer JavaScript features.
// This is just for the sake of an example
Object.prototype.sayHello = function() {
  console.log('Hello!')
}

// Prototype is an Object
// Object.create() method creates a new object, using a passed object as a prototype.
// alice ---> person --> Object.prototype --> null
const alice = Object.create(person)

alice.name = "Alice"

// Calling String methods on str1 involves autoboxing

const str1 = 'I am a primitive'
const str2 = new String('I am a Wrapper Object')


// Trying to access nonexistent properties will always traverse the full prototype chain, affecting perfomance

// hasOwnProperty is the only thing in JavaScript which deals with properties and does not traverse the prototype chain.