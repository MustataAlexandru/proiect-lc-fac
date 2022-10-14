const a = [1, 0, 1, 1, 0, 1, 1, 0, 0, 1];
const b = [1, 1, 0, 1, 1, 0, 1, 0, 0, 1];

let or = [];
let and = [];
let xor = [];

for (let i = 0, j = 0; i < a.length, j < b.length; i++, j++) {
  console.log(a[i], b[j]);

  if (a[i] == 1 || b[i] == 1) {
    or.push(1);
  } else if (a[i] == 0 && b[j] == 0) {
    or.push(0);
  }
  if (a[i] == 1 && b[i] == 1) {
    and.push(1);
    xor.push(0);
  } else if (a[i] == 0 && b[i] == 0) {
    and.push(0);
    xor.push(0);
  }
  if (a[i] !== b[i]) {
    and.push(0);
    xor.push(1);
  }
}

console.log(`Prima linie este: ${a}`, a);
console.log(`A doua linie este: ${b}`, b);
console.log(`OR este: ${or}`, or);
console.log(`AND este: ${and}`, and);
console.log(`XOR este: ${xor}`, xor);
