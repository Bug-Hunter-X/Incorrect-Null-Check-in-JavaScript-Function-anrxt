# Incorrect Null Check in JavaScript Function

This repository demonstrates a common error in JavaScript: incorrectly handling `null` values without considering `undefined`. The original code only checks for `null`, leading to unexpected behavior when an argument is `undefined`.

## Bug

The `foo` function in `bug.js` does not correctly handle `undefined` parameters. If either `a` or `b` is `undefined`, the function will proceed, potentially leading to errors.

## Solution

The `bugSolution.js` file demonstrates the correct way to handle both `null` and `undefined` values using loose equality (`==`) or explicit checks for both cases.

## How to reproduce

1. Clone the repository.
2. Open `bug.js` and `bugSolution.js` to see the code example.
3. Run the original function `foo` with an `undefined` parameter to observe the incorrect behavior.
4. Run the updated function in `bugSolution.js` to see the correct behavior.

This demonstrates the importance of handling both `null` and `undefined` appropriately in JavaScript for robust code.