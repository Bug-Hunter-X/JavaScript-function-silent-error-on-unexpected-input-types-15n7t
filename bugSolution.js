function foo(x) {
  if (x === null || x === undefined) {
    return 0; // Handle null and undefined cases
  }
  if (typeof x === 'string' || Array.isArray(x)) {
    return x.length; // Handle string and array cases
  } else {
    return 0; // Handle other object types
  }
}

console.log(foo([1, 2, 3])); // Output: 3
console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: 0
console.log(foo({})); // Output: 0, corrected
console.log(foo("hello")); // Output: 5