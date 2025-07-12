const times = parseInt(process.argv[2]);

if (isNaN(times)) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < times; i++) {
    console.log("C is fun");
  }
}
// This code takes a command line argument, attempts to convert it to an integer, and checks if the conversion was successful.
// If the argument is not a number, it prints "Missing number of occurrences"; otherwise,