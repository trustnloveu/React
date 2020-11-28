import { compose, pipe } from "lodash/fp";

let input = "  Text  ";
let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();
const toLowerCase = (str) => str.toLowerCase();
const wrapInDiv = (str) => `<div>${str}</div>`;

// You should read it from right to left
// const transform = compose(wrapInDiv, toLowerCase, trim);
const transform = pipe(trim, toLowerCase, wrapInDiv);

// const result = wrapInDiv(toLowerCase(trim(input)));
const result = transform(input);
console.log(result);
