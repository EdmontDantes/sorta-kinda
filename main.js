/******************
 * YOUR CODE HERE *
 ******************/
const firstNumberIsLess = function(num1, num2) {
  if (num1 < num2) {
    return -1;
  } else if (num1 > num2) {
    return 1;
  } else {
    return 0;
  }
}

const secondNumberIsLess = function(num1, num2) {
  if (num2 < num1) {
    return -1;
  } else if (num2 > num1) {
    return 1;
  } else {
    return 0;
  }
}

const firstNameIsFirstAlphabetically = function(name1, name2) {
  if (name1 < name2) {
    return -1;
  } else if (name1 > name2) {
    return 1;
  } else {
    return 0;
  }
}

const firstLastNameIsFirstAlphabetically = function(name1, name2) {

  let lastName1 = name1.slice(name1.indexOf(' ') + 1);
  let lastName2 = name2.slice(name2.indexOf(' ') + 1);

  if (lastName1 < lastName2) {
    return -1;
  } else if (lastName1 > lastName2) {
    return 1;
  } else {
    return 0;
  }
}

const trueIsFirst = function(bool1, bool2) {
  if (bool1 === true && bool2 === false) {
    return -1;
  } else if (bool1 === false && bool2 === true) {
    return 1;
  } else {
    return 0;
  }
}


/************************
 // ITERATION FUNCTIONS
 ************************/

const sortByNumberAscending = function(nums) {

  const sortedNumsAscending = nums.slice();
  return sortedNumsAscending.sort(firstNumberIsLess);
}

const sortByNumberDescending = function(nums) {

  const sortedNumsDescending = nums.slice();
  return sortedNumsDescending.sort(secondNumberIsLess);
}

const truesFirst = function(bools) {
  
  const sortedBoolsFirstTrue = bools.slice();
  return sortedBoolsFirstTrue.sort(trueIsFirst);
}

const sortByNameAscending = function(names) {

  const sortedFirstNamesAscending = names.slice();
  return sortedFirstNamesAscending.sort(firstNameIsFirstAlphabetically);
}

const sortByLastNameAscending = function(names) {

  const sortedLastNamesAscending = names.slice();
  return sortedLastNamesAscending.sort(firstLastNameIsFirstAlphabetically);
}


/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof firstNumberIsLess === 'undefined') {
  firstNumberIsLess = undefined;
}

if (typeof secondNumberIsLess === 'undefined') {
  secondNumberIsLess = undefined;
}

if (typeof firstNameIsFirstAlphabetically === 'undefined') {
  firstNameIsFirstAlphabetically = undefined;
}

if (typeof firstLastNameIsFirstAlphabetically === 'undefined') {
  firstLastNameIsFirstAlphabetically = undefined;
}

if (typeof sortByNumberAscending === 'undefined') {
  sortByNumberAscending = undefined;
}

if (typeof sortByNumberDescending === 'undefined') {
  sortByNumberDescending = undefined;
}

if (typeof sortByNameAscending === 'undefined') {
  sortByNameAscending = undefined;
}

if (typeof sortByLastNameAscending === 'undefined') {
  sortByLastNameAscending = undefined;
}

if (typeof trueIsFirst === 'undefined') {
  trueIsFirst = undefined;
}

if (typeof truesFirst === 'undefined') {
  truesFirst = undefined;
}


module.exports = {
  firstNumberIsLess,
  secondNumberIsLess,
  firstNameIsFirstAlphabetically,
  firstLastNameIsFirstAlphabetically,
  trueIsFirst,
  truesFirst,
  sortByNumberAscending,
  sortByNumberDescending,
  sortByNameAscending,
  sortByLastNameAscending,
  truesFirst,
}
