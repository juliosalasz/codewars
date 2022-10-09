var countBits = function (n) {
  // Program Me

  //this will turn numbers into binary

  //after it must count the 1 in the interger and return how much of them are there
  //maybe we can spread the interger into an array for each number
  //we could have a for loop that will keep a counter when the value is equal to one

  if (n > 0) {
    const numBinary = n.toString(2);
    //here we have our array with every 1 or 0 as an element in the array
    const numArray = String(numBinary)
      .split("")
      .map((num) => Number(num));
    console.log(numArray);
    //now we must count how many 1 are there in the array.
    //We can create a for loop that will count for every element
    let count = 0;

    numArray.forEach((num) => {
      if (num === 1) {
        count += 1;
      }
    });

    console.log(count);

    return count;
  } else {
    return n;
  }
};
