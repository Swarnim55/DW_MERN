import React from 'react';

const HomeWork = () => {
  const checkDetails = (age) => {
    if (age === 25) {
      console.log('Your Ticket is Free');
      return 'Your Ticket is Free';
    } else if (age === 26) {
      console.log('Your Ticket Cost 100');
      return 'Your Ticket Cost 100';
    } else if (age === 27) {
      console.log('Your Ticket Cost 200');
    } else {
      console.log("You're Not Allowed");
    }
  };
  return (
    <div>
      <h1>HomeWork</h1>
      <p>Entered Age: 26</p> {checkDetails(26)}
      <p> Logged Statement: </p>
    </div>
  );
};

export default HomeWork;
