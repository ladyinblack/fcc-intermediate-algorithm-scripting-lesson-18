## ALTERNATE SOLUTIONS

### Solution 1 (Using for-in loop & hasOwnProperty)
```js
function truthCheck(collection, pre) {
  // Create a counter to check how many are true.
  let counter = 0;
  // Check for each object
  for (let c in collection) {
    // If it is has property and value is truthy
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }
  // Outside the loop, check to see if we got true for all of them and return true or false
  return counter == collection.length;
}

truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot");
```

### Code Explanation
- First I create a counter to check how many cases are actually true.
- Then check for each object if the value is truthy.
- Outside the loop, I check to see if the counter variable has the same value as the length of **collection**, if true then return **true**, otherwise, return **false**.

### REFERENCE LINKS
- [JS Loops](https://www.freecodecamp.org/news/javascript-for-loops/)
- [`Object.prototoype.hasOwnProperty()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)


### Solution 2 (Using Array.every())
```js
function truthCheck(collection, pre) {
  return collection.every(function (element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}

truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot");
```

### Code Explanation
- Uses the native `every` method to test whether all elements in the array pass the test.
- This link will help [`Array.prototype.every()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every).

### REFERENCE LINKS
- [JS Array.prototype.every()](https://forum.freecodecamp.org/t/how-to-use-javascript-array-prototype-every-explained-with-examples/14287)
- [MDN Array.prototype.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)


### Solution 3 
```js
function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every(obj => obj[pre]);
}

truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot");
```

### Code Explanation
- For *every* object in the `collection` array, check the truthiness of object's property passed in `pre` parameter.
- `Array.prototype.every` method internally checks if the value returned from the callback is truthy.
- Return `true` if it passes for *every* object.  Otherwise, return `false`.

### REFERENCE LINKS
- [Array.prototype.every](https://devdocs.io/javascript/global_objects/array/every)

