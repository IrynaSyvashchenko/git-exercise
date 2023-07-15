
function addNumbers(a,b){
return a+b;
}

function isEven(number){
return number%2 === 0;
}

function getLength(str){
return str.length;
}

function capitalize(str){
    return str.toUpperCase();
}

function multiplyArray(array){
    product = 1
    for (i=0; i<array.length; i++) {
        product = product*array[i];
    }
    return product;
}

//To export (at the end of your functions file)
module.exports = {
    addNumbers,
    isEven,
    getLength,
    capitalize,
    multiplyArray,
  };


