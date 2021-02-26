// function frankenSplice(arr1, arr2, n) {
//     let arr3 = [];
//     for (let i = 0; i < arr2.length; i++) {
//         arr3.push(arr2[i]);
//     }

//     arr3.splice(n, 0, ...arr1);

//     return arr3;
// }

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// function getIndexToIns(arr, num) {

//     let myArr = arr.sort(function(a, b) {
//         return a - b;
//     });

//     for (let i = 0; i < myArr.length; i++) {
//         if (num <= myArr[i]) {
//             return i;
//         }
//     }

//     return arr.length;
// }

// console.log(getIndexToIns([5, 3, 20, 3], 5));

// function mutation(arr) {

//     var count = 0;

//     var string0 = arr[0].toLowerCase().split("");
//     var string1 = arr[1].toLowerCase().split("");

//     for (let i = 0; i < string1.length; i++) {
//         let ch = string1[i];
//         if (string0.indexOf(ch) != -1) {
//             count += 1;
//         }

//     }

//     if (count >= arr[1].length) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(mutation(["Noel", "Ole"]));

function chunkArrayInGroups(arr, size) {

    var out = [];
    out.push(new Array());

    let column = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        out[column].push(arr[i]);
        count += 1;

        if (count == size) {

            column += 1;
            out.push(new Array());
            count = 0;
        }
    }

    if (out[out.length - 1].length == 0) {
        out.pop();
    }

    return out;
}

console.log(chunkArrayInGroups([0, 1, 2, 3], 2));