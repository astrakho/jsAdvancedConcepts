let set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6]);

// set.add(10).add(20).add(30);

// console.log(set);

// console.log(set.has(30));

// set.clear()

// console.log(set.size);

// console.log(set.entries())

// =====

function uniqueValues(array) {
  return Array.from(new Set(array))
}

console.log(uniqueValues([1, 1, 2, 3, 4, 5, 5, 6, 7, 8]))