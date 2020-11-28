import { compose, pipe } from "lodash/fp";

let input = "  Sample Text  ";
let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();
const toLowerCase = (str) => str.toLowerCase();
// const wrapInDiv = (str) => `<div>${str}</div>`;
// const wrap = (type, str) => `<${type}>${str}</${type}>`;
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;

// const transform = compose(wrapInDiv, toLowerCase, trim);
const transform = pipe(trim, toLowerCase, wrap("div"));

// const result = wrapInDiv(toLowerCase(trim(input)));
const result = transform(input);
console.log(result);
