var sumOfNonDuplicateElements = function (nums) {
  let uniqueObject = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in uniqueObject) {
      uniqueObject[nums[i]]++;
    } else {
      uniqueObject[nums[i]] = 1;
    }
  }

  let sum = 0;
  for (prop in uniqueObject) {
    if (uniqueObject[prop] === 1) {
      sum += parseInt(prop);
    }
  }
  return sum;
};
