import React from 'react';
import { myName } from './config';
import HomeWork from './HomeWork';

const App = () => {
  // let num1 = '1';
  // let num2 = '2';

  // let num3 = String(Number(num1) + Number(num2));
  // // console.log(num3, typeof num3);

  let isMarried = true;
  isMarried ? console.log('Married') : console.log('Unmarried');

  let age = 20;
  age > 18 ? console.log('Can Watch') : console.log('Cannot Watch');

  return (
    <>
      <div style={{ fontSize: '2rem' }}>{myName}</div>
      <HomeWork />
    </>
  );
};

export default App;
