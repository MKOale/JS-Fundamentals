const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("No argument");
} else if (args.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
// This code checks the number of command line arguments passed to the script.
// It uses process.argv to access the arguments and slice(2) to skip the first two elements (node executable and script path).