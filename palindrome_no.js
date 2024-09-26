const prompt = require('prompt-sync')();

let n, i, dig, rev = 0;

n = parseInt(prompt("Enter a number: "));

console.log(`You entered: ${n}`);

for (i = n; i > 0; i= Math.floor(i/10)) {
  dig = i % 10;
  rev = rev * 10 + dig;
}

if (rev === n) {
  console.log(`${n} is a Palindrome`);
} else {
  console.log(`${n} isn't a Palindrome`);
}