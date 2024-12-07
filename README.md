# JavaScript Bug: TypeError: Cannot read properties of null (reading 'length')

This repository demonstrates a common JavaScript error: `TypeError: Cannot read properties of null (reading 'length')`. The bug arises when attempting to access the `length` property of a variable that might be null or undefined.

## Bug Description
The `bug.js` file contains a function `foo` that takes a single argument `x`.  This function attempts to access `x.length`, which will throw an error if `x` is null or undefined.

## Solution
The `bugSolution.js` file provides a corrected version of the function, which first checks if `x` is null or undefined before accessing `length`.