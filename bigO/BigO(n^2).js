// log all pairs of array
const boxes = [1, 2, 3, 4, 5];
var index = 0;

function logAllPairsOfArray(array){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            console.log(array[i], array[j]);
        }
    }
}
logAllPairsOfArray(boxes)

// when we see two loops nested, the notations leaves from + to *
// so, in this case, it would be n * n
// big O (n^2)