let a = parseInt(prompt("Enter the value of variable a:"));

while (isNaN(a) || !a) {
  a = parseInt(prompt("Invalid input for variable a. Please enter a valid number:"));
}

let b = parseInt(prompt(`Enter the value of variable b, which should be greater than ${a}:`));

while (isNaN(b) || b <= a || !b) {
  b = parseInt(prompt(`Invalid input for variable b. Please enter a valid number greater than ${a}:`));
}

let h = parseInt(prompt("Enter the value of variable h, which should be strictly greater than 0:"));

while (isNaN(h) || h <= 0 || !h) {
  h = parseInt(prompt("Invalid input for variable h. Please enter a valid number greater than 0:"));
}

let sumOfFactorials = 0;

for (let i = a; i <= b; i += h) {
  let factorial = 1;
  for (let j = 2; j <= i; j++) {
    factorial *= j;
  }
  sumOfFactorials += factorial;
}

alert(`The sum of factorials of the numbers from ${a} to ${b} with a step size of ${h} is ${sumOfFactorials}`);
