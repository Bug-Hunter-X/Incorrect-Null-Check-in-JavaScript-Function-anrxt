function foo(a, b) {
  if (a == null || b == null) {
    return;
  }
  // ... rest of the function
}

//Alternative solution using explicit checks
function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return;
  }
  // ... rest of the function
}