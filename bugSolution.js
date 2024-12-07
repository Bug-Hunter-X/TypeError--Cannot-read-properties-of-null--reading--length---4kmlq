function foo(x) {
  if (x === null || x === undefined || typeof x === 'number') {
    return 0; // Handle null, undefined, and number cases
  }
  return x.length; 
}