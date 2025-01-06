const a1 = [1,2,3]
const a2 = [4,5,6]
const a3 = [7,8,9]

const a4 = [...a1, ...a2];
console.log(a4)

const a5 = [0, ...a2 ,4]
console.log(a5)

const carName = { name: "Gol" }
const carBrand = { brand: "VW" }
const otherInfos = { km: 12312, price: 10000 }

const car = { ...carName, ...carBrand, ...otherInfos, wheels: 4 };
console.log(car);