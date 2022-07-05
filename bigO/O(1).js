function compressFirstBox(boxes){
    console.log(boxes[0]);
}
// this function, no matter the size of the array boxes, will always return only one parameter
// that why it's called O(1), the function is constant!

// now, look at this function:
function logFirstTwoBoxes(boxes){
    console.log(boxes[0]);
    console.log(boxes[1]);
}
// besides it has two operations, no matter what we give as an argument for it, we gonna receive only two responses
// so that it's also a flat function as the last one showed before
// the difference, is that this one is called O(2)

// this type of functions, constant, with always one predictable result, is the most excelent type of function!