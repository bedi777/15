const removeDuplicates = (array) => {
  const checkedElements = [];
  const uniqueElements = [];

  array.forEach((element) => {
    if (!checkedElements.includes(element)) {
      checkedElements.push(element);
      uniqueElements.push(element);
    }
  });

  return uniqueElements;
};

const nums = [10, 15, 15, 20];
const uniqueNums = removeDuplicates(nums);
console.log(uniqueNums);