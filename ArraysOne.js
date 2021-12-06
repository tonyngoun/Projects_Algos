

//push front
function pushToFront(arr, val) {

    var temp1 = arr[0], temp2 = arr[1];
    
    for (var i = 0; i < arr.length && temp1 != undefined; i++) {
        arr[i+1] = temp1;
        temp1 = temp2;
        temp2 = arr[i+2];
    }
    arr[0] = val; 
}

var myArr = [2, 3, 6, 7, 8, 4];
pushToFront(myArr, 10);
console.log(myArr);

var myArr2 = [];
pushToFront(myArr2,4);
console.log(myArr2);

var myArr3 = [8];
pushToFront(myArr3, -5);
console.log(myArr3);



function pushToFrontV2(arr, val) {
    
    for (var i = arr.length - 1; i >= 0; i--) {
        arr[i+1] = arr[i];
    }
    arr[0] = val; 
}

var myArr = [2, 3, 6, 7, 2];
pushToFront(myArr, 4);
console.log(myArr);

var myArr2 = [];
pushToFront(myArr2,4);
console.log(myArr2);

var myArr3 = [3];
pushToFront(myArr3, 3);
console.log(myArr3);


//pop array
function popFront(arr) {
    var returnVal = arr[0]; 
    
    for (var i = 1; i < arr.length; i++) {
    
        arr[i-1] = arr[i];
    }
    arr.pop(); 
    return returnVal;
}

var test = [6, 8, 3, 1];
var result = popFront(test);
console.log(result);
console.log(test);

var test3 = [10];
var result3 = popFront(test3);
console.log(result3);
console.log(test3);

var test4 = [6, -9];
var result4 = popFront(test4);
console.log(result4);
console.log(test4);



//insert At


function insertAt(arr, val, ind) {
    
    for (var i = arr.length - 1; i >= ind; i--) {
        arr[i+1] = arr[i];
    }
    arr[ind] = val; 
}

var arrTest = [3, 6, 7, 2, 9];
insertAt(arrTest, 1,5);
console.log(arrTest);
