import { produce } from "immer";

let book = { title: "Harry Potter" };

function publish(book) {
  // 1st arg: initial state
  // 2nd arg: function to specify mutation. draftBook is a proxy which records all the changes
  return produce(book, (draftBook) => {
    draftBook.isPublished = true;
  });
}

let updated = publish(book);

console.log(book);
console.log(updated);
