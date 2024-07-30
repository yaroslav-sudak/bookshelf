// Number
let a = 1;

// String
let b = "green";

// Boolean
let c = true;

// Array
let d = [1, 2, 3];

d[2] == 3;
d[2] = 16;
d[2] == 16;

// Object
let e = {
  a: 1,
  b: 2,
};

// Undefined
let f;

// Null
let g = null;

// Cycle

let array = ["a", "b", "c", "d", "e", "f"];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

console.log("While do");
let i = 0;
while (i != 0) {
  console.log(i);
}

console.log("Do while");
i = 0;
do {
  console.log(i);
} while (i != 0);

// Function

function pipiska(size, color, diameter, isActive) {
  let chlen = {
    size: size,
    color: color,
    diameter: diameter,
    isActive: isActive,
  };

  return chlen;
}
function plus(...args) {
  let sum = 0;
  args.forEach((arg) => {
    sum += arg;
  });
  console.log(sum);
}