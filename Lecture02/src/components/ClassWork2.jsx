import React from 'react';

const ClassWork2 = () => {
  const name = () => {
    return (
      <>
        <p>I am an arrow Function without Params </p>
      </>
    );
  };
  const nameParam = (name) => {
    return (
      <>
        <p>I am an arrow Function with {name} as Params </p>
      </>
    );
  };

  const avgFunc = (a, b) => {
    const avg = (a + b) / 2;
    return avg;
  };

  return (
    <>
      <h1> Functions & Arrow Function</h1>
      {name()}
      {nameParam('DWTC')}
      Average Function: {avgFunc(3, 9)}
    </>
  );
};

export default ClassWork2;
