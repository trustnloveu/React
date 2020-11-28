function add1(a) {
  return function (b) {
    return a + b;
  };
}

const add2 = (a) => (b) => a + b;

add1(1)(5);
add2(1)(5);
