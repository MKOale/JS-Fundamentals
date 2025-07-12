const arg = parseInt(process.argv[2]);

if (isNaN(arg)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${arg}`);
}
// This code takes a command line argument, attempts to convert it to an integer, and checks if the conversion was successful.
// If the argument is not a number, it prints "Not a number"; otherwise, it prints the integer value prefixed with "My number: ".
// It uses parseInt to convert the argument and isNaN to check if the conversion failed