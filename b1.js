// Phân tích 1 số nguyên dương từ hệ thập phân ra hệ nhị phân

let arr = [];
function b1(n) {
  if (n == 1) {
    arr.push(1);
  } else {
    arr.push(n % 2);
    b1(Math.floor(n / 2));
  }
}
function result(n) {
  b1(n);
  const newArray = arr.reverse();
  newArray.forEach((element) => {
    console.log(element);
  });
}

result(7);
