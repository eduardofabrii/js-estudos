let a = 1;
let b = 2;
let c = 3;

console.log(a)

if (c > a) {
    a = b;
}

console.log(a)

for (let i = 5; i > 0; i--) {
    b++;
    a = a + c + 1;
    c += 2;
}

console.log(a)

if (b == a) {
    a++;
} else {
    a = a + b + c;
}


debugger;

a = a * b;

console.log(a)