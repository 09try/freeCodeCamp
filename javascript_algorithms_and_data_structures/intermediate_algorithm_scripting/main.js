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


function destroyer(arr) {

    let elementsToRemove = [];
    let newArr = [];

    for (let i = 1; i < arguments.length; i++) {
        elementsToRemove.push(arguments[i]);
    }

    for (let i = 0; i < elementsToRemove.length; i++) {
        for (let j = 0; j < arguments[0].length; j++) {
            if (elementsToRemove[i] != arguments[0][j]) {
                newArr.push(arguments[0][j]);
            }
        }

    }

    return newArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));