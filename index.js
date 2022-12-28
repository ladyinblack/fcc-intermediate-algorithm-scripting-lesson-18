// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Everything Be True</h1>`;

/**
 * Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
 *
 * In other words, you are given an array collection of objects.  The predicate pre will be an object property and you need to return true if its value is truthy.  Otherwise, return false.
 *
 * In JavaScript, truthy value are values that translate to true when evaluated in a Boolean context.
 *
 * Remember, you can access object properties through either dot notation or [] notation.
 */

function truthCheck(collection, pre) {
  let counter = 0;
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre])) {
      counter++;
    }
    // for (let j = 0; j < keys.length; j++) {
    // return keys == pre || values == true;
    // }
  }
  return counter == collection.length;
}

console.log(
  truthCheck(
    [
      { name: 'Quincy', role: 'Founder', isBot: false },
      { name: 'Naomi', role: '', isBot: false },
      { name: 'Camperbot', role: 'Bot', isBot: true },
    ],
    'isBot'
  )
);
console.log(
  truthCheck(
    [
      { name: 'Quincy', role: 'Founder', isBot: false },
      { name: 'Naomi', role: '', isBot: false },
      { name: 'Camperbot', role: 'Bot', isBot: true },
    ],
    'name'
  )
);
console.log(
  truthCheck(
    [
      { name: 'Quincy', role: 'Founder', isBot: false },
      { name: 'Naomi', role: '', isBot: false },
      { name: 'Camperbot', role: 'Bot', isBot: true },
    ],
    'role'
  )
);
console.log(
  truthCheck(
    [
      { name: 'Pikachu', number: 25, caught: 3 },
      { name: 'Togepi', number: 175, caught: 1 },
    ],
    'number'
  )
);
console.log(
  truthCheck(
    [
      { name: 'Pikachu', number: 25, caught: 3 },
      { name: 'Togepi', number: 175, caught: 1 },
      { name: 'MissingNo', number: NaN, caught: 0 },
    ],
    'caught'
  )
);
console.log(
  truthCheck(
    [
      { name: 'Pikachu', number: 25, caught: 3 },
      { name: 'Togepi', number: 175, caught: 1 },
      { name: 'MissingNo', number: NaN, caught: 0 },
    ],
    'number'
  )
);
console.log(
  truthCheck(
    [
      { name: 'Quincy', username: 'QuincyLarson' },
      { name: 'Naomi', username: 'nhcarrigan' },
      { name: 'Camperbot' },
    ],
    'username'
  )
);
console.log(
  truthCheck(
    [
      { name: 'freeCodeCamp', users: [{ name: 'Quincy' }, { name: 'Naomi' }] },
      { name: 'Code Radio', users: [{ name: 'Camperbot' }] },
      { name: '', users: [] },
    ],
    'users'
  )
);
console.log(
  truthCheck(
    [
      {
        id: 1,
        data: { url: 'https://freecodecamp.org', name: 'freeCodeCamp' },
      },
      {
        id: 2,
        data: { url: 'https://coderadio.freecodecamp.org/', name: 'CodeRadio' },
      },
      { id: null, data: {} },
    ],
    'data'
  )
);
console.log(
  truthCheck(
    [
      {
        id: 1,
        data: { url: 'https://freecodecamp.org', name: 'freeCodeCamp' },
      },
      {
        id: 2,
        data: { url: 'https://coderadio.freecodecamp.org/', name: 'CodeRadio' },
      },
      { id: null, data: {} },
    ],
    'id'
  )
);
