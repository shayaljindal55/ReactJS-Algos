"use strict";
const express = require('express')
var router = express.Router();

router.get('/', (req, res) => {
    try {

    } catch (e) {
        console.error(e);
    }
    // call main method
    var result = main();
    // return the final result as response
    res.send(result);
});

// logic begins from this method
function main() {
    try {
        // initialize the given input(s) values
        var strings = ["aba", "baba", "aba", "xzxb"];
        var queries = ["aba", "xzxb", "ab"];
        // method to check occurrence of 'each' query in 'strings'. 
        // matchingStrings has the following parameters:
        // strings - an array of strings to search
        // queries - an array of query strings
        var result = matchingStrings(strings, queries);
        return result;
    } catch (e) {
        console.error(e);
    }
}
// method to check occurrence of each 'query' in 'strings'
function searchOccurrence(strings, s) {
    try {
        var counter = 0;
        for (var j = 0; j < strings.length; j++) {
            if (s === strings[j]) {
                counter++;
            }
        }
        return counter;
    } catch (e) {
        console.error(e);
    }
}

// method that returns an array of integers representing the frequency of occurrence of each 'query' 'in strings'.
function matchingStrings(strings, queries) {
    try {
        var result = [];
        for (var i = 0; i < queries.length; i++) {
            console.log(searchOccurrence(strings, queries[i]) + " ");
            result.push(search(strings, queries[i]) + " ");
        }
        return result;
    } catch (e) {
        console.error(e);
    }
}

module.exports = router;