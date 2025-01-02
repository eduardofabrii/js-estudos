function* criadorID() {
    let id = 0;
    while (true) {
        yield id++;
    }
}

let criaID = criadorID();

console.log(criaID.next().value)
console.log(criaID.next().value)