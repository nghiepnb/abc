//Đếm số lượng số 0 tận cùng của n! (n < 10^6). Ví dụ f(5!) = 1 (120 => 1)

function b3(n) {
  if (n > 1) return b3(n - 1) * n;
  return n;
}

function result(n) {
  const value = b3(n);
  console.log("value", value);

  const arr = value.toString().split("");
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i == "0") {
      count++;
    } else {
      break;
    }
  }
}

result(200);
