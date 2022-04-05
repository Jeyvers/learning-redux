// Currying
import { compose, pipe } from 'lodash/fp.js';
let input = ' JavaScript ';
const trim = (str) => str.trim();
// Problem: Codes look alike
// const wrapInDiv = (str) => `<div>${str}</div>`;
// const wrapInSpan = (str) => `<span>${str}</span>`;

// Solution
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
const toLowerCase = (str) => str.toLowerCase();
const transform = pipe(trim, toLowerCase, wrap('div'));

transform(input);
console.log(transform(input));
