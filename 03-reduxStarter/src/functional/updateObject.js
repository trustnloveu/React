const person = {
  name: "Austin",
  address: {
    country: "KOR",
    city: "Busan",
  },
};

// 1. Object.assign()
// you can copy the content of an object to another object
// 2nd arg: copy object
// 3rd arg: update object (if neccessary)
// const updated = Object.assign({}, person, { name: "Yang", age: 28 });

// 2. spread operator
// 2nd arg: will overwirte prior properties
const updated = {
  ...person,
  address: {
    ...person.address,
    city: "Seoul",
  },
  name: "Yang",
};
// updated.address.city = "Seoul"; // Problem is both of objects is pointing at the same memory, which is shared in between

console.log(person);
console.log(updated);

// Shallow copy vs Deep copy
