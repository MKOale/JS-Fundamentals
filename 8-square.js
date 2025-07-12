const size = parseInt(process.argv[2]);

if (isNaN(size)) {
  console.log("Missing size");
} else {
  for (let i = 0; i < size; i++) {
    console.log("X".repeat(size));
  }
}
// This code takes a command line argument, attempts to convert it to an integer, and checks if the conversion was successful.
// If the argument is not a number, it prints "Missing size"; otherwise, it prints