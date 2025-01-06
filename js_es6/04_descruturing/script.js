const users = [
    { name: "Eduardo", altura: 1.74, avaliable: true },
    { name: "João",  altura: 1.80, avaliable: false },
    { name: "Henrique",  altura: 1.75, avaliable: false },
    { name: "Paulo",  altura: 1.82, avaliable: true }
]

const [{name: firstName, altura: height, avaliable: avaliable}] = users;

console.log(`O nome da pessoa é ${firstName}, ele tem ${height} e está ${avaliable}`)
