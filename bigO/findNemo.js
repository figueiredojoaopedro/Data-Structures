// basically we got to find nemo in a array
// quite easy

const nemo = ['dori', 'shark1', 'shark2','shark3', 'nemo'];
const largeArray = new Array(100000).fill('nemo');

// we can make a function to find him
function findNemo (array){
    let t0 = performance.now();
    for(let i = 0; i < array.length; i++){
        if(array[i] === 'nemo')
            console.log("Found nemo mate!!!");
    }
    let t1 = performance.now();
    console.log('it took: ' + (t1 - t0) + "milliseconds!");
}

findNemo(largeArray);