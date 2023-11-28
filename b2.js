// Tìm dãy số tăng liên tiếp dài nhất. In ra độ dài và vị trí xuất phát. Nếu có nhiều dãy con thì in ra dãy con có vị trí xuất phát nhỏ nhất.
// Ví dụ: 2, 6, 4, 3, 5, 7, 8 => in ra Length: 4, Pos: 3. (vì dãy 3, 5, 7, 8 là liên tiếp và dài nhất)

function test(nums) {
  const list = new Map();
  let length = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      ++length;
      if (i == nums.length - 1) list.set(length, i);
    } else {
      list.set(length, i);
      length = 1;
    }
  }
  let maxLength = 0;
  list.forEach((value, key) => {
    if (key > maxLength) maxLength = key;
  });
  console.log(
    "max length",
    maxLength,
    "Pos",
    nums[list.get(maxLength) - maxLength + 1]
  );
}
test([2, 6, 4, 3, 5, 7, 8, 9]);
