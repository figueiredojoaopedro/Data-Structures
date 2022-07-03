// basically we got to find nemo in a array
// quite easy

const nemo = ['dori', 'shark1', 'shark2','shark3', 'nemo'];
const largeArray = new Array(100000).fill('nemo');

// we can make a function to find him
function findNemo (array){
    for(let i = 0; i < array.length; i++){
        if(array[i] === 'nemo')
            console.log("Found nemo mate!!!");
    }
}

findNemo(largeArray);

// O(n) is the very fist big o notation
// it states that no matter the number of operations it does, the number of elements calculated will be exactly linear with the number of the operations
// like a linear chart, with only one variable and no coeficients to add.
// O(n) = n -> the equation of the chart
// the other name can be Linear Time.