const arr = [1, 14, 9, 3, 10, 144, 2, 17, 38, 4],
      sorted = arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}

console.log(sorted);