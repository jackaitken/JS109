var shuffle = function(nums, n) {
  return nums.map((num, index) => {
    if (!(index > nums / 2)) {
      return [num, nums[index + n]];
    }
  }).flat();
};

let nums = [2,5,1,3,4,7]
let n = 3

console.log(shuffle(nums, n));