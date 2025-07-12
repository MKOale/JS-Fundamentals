function add(a, b) {
  return a + b;
}

const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);

console.log(add(a, b));
// This code defines a function `add` that takes two arguments and returns their sum.
// It then reads two command line arguments, converts them to integers using `parseInt`, and