import React from 'react';
import { arrConverter, spliterFunc } from './Convert';

const ClassWork = () => {
  /**
   let list1 = ['nitan', 29, 'thapa', false];
   list1[1] = 30;
   let t1 = list1.map((ele) => `${ele}, `);
   const [, val2] = list1;
    if (undefined) {
    console.log('true');
  } else {
    console.log('false');
  }
   **/

  // let info = {
  //   name: 'Swarnim',
  //   age: 24,
  //   address: 'Kathmandu',
  //   isMarried: false,
  // };

  //Modifying Object Property
  //info.age = 25;

  // Deleting Object Property
  //delete info.address;

  //Adding New Object Property
  // info.college = 'SMIT';

  // console.log(info);

  //string methods

  // let myData = 'Swarnim 29';

  //string.split('Splitter Symbol', 'Limit')
  //Converts string to an array

  // let arr = myData.split('');
  // console.log(arr);

  //string.join('joiner symbol')
  // Converts array into a string

  // let myArr = ['Swarnim', 'Paudyal', 'SMIT', 'CSE', 201911503];

  // let newString = myArr.join(',');

  // console.log(newString);

  // let myStr = 'My name is nitan thapa';
  // let retArr = spliterFunc(myStr);

  //console.log(retArr);

  //* includes

  // const list = ['mango', 'banana', 'apple'];

  // const isApplePresent = list.includes('apple');

  // console.log(isApplePresent);

  //* reverse

  //const arr = ['anything', 'manything', 'something'];
  //console.log(arr.reverse());

  // const str = 'swarnim';
  // const newArr = str.split('');
  // const revStr = newArr.reverse().join('');

  // console.log(revStr);

  //* sort
  const arr = [1, 4, 8, 6];
  const returnedArray = arrConverter(arr);
  console.log(returnedArray);
  return (
    <>
      <h1>Arrays</h1>
      <h1> Objects</h1>
      <h1>Arrays Methods</h1>
    </>
  );
};

export default ClassWork;
