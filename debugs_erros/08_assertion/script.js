let arr1 = [1,2,3,4,5];
let arr2 = [];

// Uma assertion é uma redomendação a ser seguida, tipo como se fosse um alerta
function iterarArray(array) {
    if (array.length == 0) {
        throw new Error("O array precisa ter pelo menos um elemento!")
    } else {
        array.forEach(element => {
            console.log(element)
        });
    }
}

iterarArray(arr1);
iterarArray(arr2);