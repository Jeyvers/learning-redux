import { compose, pipe } from 'lodash/fp.js';
// Fucntion Composition using loadash
let input = ' JavaScript ';
const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`;
const toLowerCase = (str) => str.toLowerCase();

// Solves multiple brackets problem
// const transform = compose(wrapInDiv, toLowerCase, trim);

// Solves reading left to right problem
const transform = pipe(trim, toLowerCase, wrapInDiv);

transform(input);
console.log(transform(input));
