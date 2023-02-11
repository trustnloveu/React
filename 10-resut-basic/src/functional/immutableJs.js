import { Map } from "immutable";

let book = Map({ title: "Harry Poter" }); // let book = { title: "Harry Potter" };

function publish(book) {
  return book.set("isPublished", true); // book.isPublished = true;
}

// reasign
book = publish(book);

// console.log(book.get("title"));
console.log(book.toJS());
