"use strict";
const express = require('express')
var router = express.Router();
var counter = 0;
router.get('/', (req, res) => {
    try {
        // call main method
        var result = main();
        // return the final result as response
        res.send(JSON.stringify(result));
    } catch (e) {
        console.error(e);
    }
});

// logic begins from this method
function main() {
    try {
        counter = 0;
        // initialize the given input(s) values
        var n = 6;
        var m = 6;
        var first = [4, 2, 42, 3, 5, 1];
        // initialize the given expected final list
        var second = [43, 1, 2, 3, 4, 5];
        // call a re-usable method to shift a specific element of an array to a specifc index 
        // inputs of this method contain array, expected new index and element intended to move
        var moved1 = moveEleAtSpecPstn(first, 1, 1);
        // call a method to add element '43' to position 0
        var added43 = add43ToPosition0(moved1, 43);
        // call a method to remove element '42'
        var removed42 = removeElement42(added43, 43);
        // call a re-usable method to shift a specific element of an array to a specifc index 
        // inputs of this method contain array, expected new index and element intended to move
        var result = moveEleAtSpecPstn(removed42, 4, 4);
        if (JSON.stringify(result) === JSON.stringify(second)) {
            return counter;
        } else {
            return 'Some Error Occured!!';
        }
    } catch (e) {
        console.error(e);
    }
}

// re-usable method to shift a specific element of an array to a specifc index 
// inputs of this method contain array, expected new index and element intended to move
function moveEleAtSpecPstn(first, newIndex, ele) {
    try {
        var oldIndex = first.indexOf(ele);
        if (newIndex >= first.length) {
            var k = newIndex - first.length + 1;
            while (k--) {
                first.push(undefined);
            }
        }
        first.splice(newIndex, 0, first.splice(oldIndex, 1)[0]);
        counter++;
        return first;
    } catch (e) {
        console.error(e);
    }
}

// method to add an element to an array given as input
function add43ToPosition0(arr, ele) {
    try {
        arr.splice(0, 0, ele);
        counter++;
        return arr;
    } catch (e) {
        console.error(e);
    }
}

// method to remove an element from an array given as input
function removeElement42(arr, ele) {
    try {
        var index = arr.indexOf(ele);
        if (index > -1) {
            arr.splice(index, 1);
        }
        counter++;
        return arr;
    } catch (e) {
        console.error(e);
    }
}

module.exports = router;