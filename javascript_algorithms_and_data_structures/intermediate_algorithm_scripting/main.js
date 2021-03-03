// function diffArray(arr1, arr2) {

//     if (arr1.length == 0) {
//         return arr2;
//     } else if (arr2.length == 0) {
//         return arr1;
//     } else {
//         var newArr = [];

//         for (let i = 0; i < arr1.length; i++) {
//             if (arr2.includes(arr1[i]) == false) {
//                 newArr.push(arr1[i]);
//             }
//         }

//         for (let i = 0; i < arr2.length; i++) {
//             if (arr1.includes(arr2[i]) == false) {
//                 newArr.push(arr2[i]);
//             }
//         }

//         newArr = [...new Set(newArr)];

//         return newArr;
//     }

// }

// console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));


// function destroyer(arr) {

//     let elementsToRemove = [];
//     let newArr = [];

//     for (let i = 1; i < arguments.length; i++) {
//         elementsToRemove.push(arguments[i]);
//     }

//     for (let j = 0; j < arguments[0].length; j++) {

//         let match = false;

//         for (let k = 0; k < elementsToRemove.length; k++) {
//             if (arguments[0][j] == elementsToRemove[k]) {
//                 match = true;
//             }
//         }

//         if (match == false) {
//             newArr.push(arguments[0][j]);
//         }
//     }

//     return newArr;
// }

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

function spinalCase(str) {

    var repl = str.replace(/^\s+|\s+$|\s+(?=\s)/g, " ");
    repl = repl.replace(/_/g, " ");

    for (let i = 0; i < repl.length; i++) {
        console.log(repl[i]);
    }



    repl = repl.toLowerCase();
    repl = repl.split(' ');
    repl = repl.join('-');

    return repl;
}

console.log(spinalCase('This_Is Spinal Tap'));