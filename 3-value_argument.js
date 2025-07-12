const arg = process.argv[2];

if (arg === undefined) {
  console.log("No argument");
} else {
  console.log(arg);
}
// This code checks if a command line argument is provided.
// If an argument is given, it prints the argument; otherwise, it indicates that no argument was provided.
// It uses process.argv to access the command line arguments, where the first two elements are the Node.js executable and the script path, and the third element is the first argument passed to the script.