//This function should return the largest sum of any ascending subarray
//in the passed array
var maxAscendingSum = function (nums) {
  let ascendingSubarrays = {};

  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] && nums[i] > nums[i - 1]) {
      ascendingSubarrays[index] = ascendingSubarrays[index] || [];
      ascendingSubarrays[index].push(nums[i]);
    } else {
      index++;
      ascendingSubarrays[index] = ascendingSubarrays[index] || [];
      ascendingSubarrays[index].push(nums[i]);
    }
  }

  let sums = [];
  for (field in ascendingSubarrays) {
    sums.push(ascendingSubarrays[field].reduce((a, b) => a + b, 0));
  }

  return Math.max(...sums);
};
