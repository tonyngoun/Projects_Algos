//reverse

function Reverse(Arr) {

    let i = 0;
    let y = Arr.length - 1;

    while ( i < y) {

    let temp = Arr[i];
    Arr[i] = Arr[y];
    Arr[y] = temp;

    i++;
    y--;
    }
}

// let myArr = [10, 2, 3, 4, 5];

// Reverse(myArr);

// console.log(myArr);



///////rotate

function rotateArr(arr, shiftBy){
    if(shiftBy < 0){
        for(var i = 0; i < Math.abs(shiftBy); i++){
            var temp = arr[i];
            for (var k = 1; k < arr.length; k++){
                
                arr[k-1] = arr[k];
            }
        arr[arr.length-1] = temp;
        }
    return arr;
    }

var myArr = [2,4,8,6,1];


//////// filter range

function filterRange(arr, min, max) {
    for (var i = 0; i < arr.length; i++) {
    
        if (arr[i] < min || arr[i] > max) {
            for (var k = i+1; k < arr.length; k++) {
                arr[k-1] = arr[k];
            }
            arr.length--; 
            i--; 
        }
    }
}
// var myArr1 = [1, 5 ,7 ,5, 4,9];
// filterRange(myArr1,3,9);
// console.log(myArr1);




//concat 
function merge(arr1, arr2) {
    
    var newArr = [];
    for (var i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i]);
    }
    for(var k = 0; k < arr2.length; k++){
        newArr.push(arr2[k])
    }
    return newArr;
}

// var test1 = ['a', 'b'];
// var test2 = [1,2]
// console.log(merge(test1, test2));