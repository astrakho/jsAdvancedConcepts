let obj = {
  name: 'weakMap'

}


// const arr = [obj]

// obj = null;

// console.log(obj)


const map = new WeakMap([
  [obj, 'obj data']
])

// get set delete has

obj = null;

// =======

const cache = new WeakMap()

function cacheUser(user) {
  if (!cache.has(user)) {
    cache.set(user, Date.now())
  }
  return cache.get(user)
}

let bob = {name: 'Bob'}
let alex = {name: 'Alex'}

cacheUser(bob)
cacheUser(alex)

bob = null

console.log(cache.has(bob))
console.log(cache.has(alex))