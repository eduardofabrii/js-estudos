const arr = [1,2,3,4,5];

const highNumbers = arr.filter((i) => {
    if (i > 3) {
        return i;
    }
});

console.log(highNumbers)

const users = [
    { name: "Eduardo", avaliable: true },
    { name: "João", avaliable: false },
    { name: "Henrique", avaliable: false },
    { name: "Paulo", avaliable: true }
]

const avaliableUsers = users.filter((name) => {
    if (name.avaliable == true) {
        return name;
    }
});

// Ou

const notAvaliableUsersResume = users.filter((name) => !name.avaliable);

console.log(avaliableUsers)
console.log(notAvaliableUsersResume)