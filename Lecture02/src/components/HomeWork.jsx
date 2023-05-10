import React, { useRef, useState } from 'react';
import Card from './UI/Card/Card';
import styles from './Homework.module.css';

const HomeWork = () => {
  const q1Input = useRef();
  const q2Input = useRef();
  const q3Input = useRef();
  const q4Input = useRef();
  const q51Input = useRef();
  const q52Input = useRef();
  const q53Input = useRef();
  const q6Input = useRef();
  const q7Input = useRef();
  const q8Input = useRef();
  const q9Input = useRef();

  const [q1, setQ1] = useState('Empty Input');
  const [q2, setQ2] = useState('Empty Input');
  const [q3, setQ3] = useState('Empty Input');
  const [q4, setQ4] = useState('Empty Input');
  const [q5, setQ5] = useState('All Inputs Empty');
  const [q6, setQ6] = useState('Empty Input');
  const [q7, setQ7] = useState('Empty Input');
  const [q8, setQ8] = useState('Empty Input');
  const [q9, setQ9] = useState('Empty Input');

  //Q1
  const is18 = (data) =>
    data ? (data === 18 ? 'true' : 'false') : 'Empty Input';

  const q1Handler = () => {
    const inputData = Number(q1Input.current.value);

    setQ1(is18(inputData));
  };

  //Q2

  const isGreaterThan18 = (data) =>
    data ? (data >= 18 ? 'true' : 'false') : 'Empty Input';

  const q2Handler = () => {
    const inputData = Number(q2Input.current.value);

    setQ2(isGreaterThan18(inputData));
  };

  //Q3

  const canEnter = (data) =>
    data ? (data >= 18 ? 'You Can Enter' : 'You Cannot Enter') : 'Empty Input';

  const q3Handler = () => {
    const inputData = Number(q3Input.current.value);

    setQ3(canEnter(inputData));
  };

  // Q4

  const isEven = (data) =>
    data ? (data % 2 === 0 ? 'True' : 'False') : 'Empty Input';

  const q4Handler = () => {
    const inputData = Number(q4Input.current.value);

    setQ4(isEven(inputData));
  };

  //Q5

  const avg = (d1, d2, d3) => {
    if (d1 && d2 && d3) {
      const average = (Number(d1) + Number(d2) + Number(d3)) / 3;
      return average.toFixed(1);
    } else if (d1 === '' && d2 !== '' && d3 !== '') {
      return 'N1 Empty';
    } else if (d1 === '' && d2 === '' && d3 !== '') {
      return 'N1 & N2 Input Empty';
    } else if (d1 === '' && d2 !== '' && d3 === '') {
      return 'N1 & N3 Input Empty';
    } else if (d1 !== '' && d2 === '' && d3 === '') {
      return 'N2 & N3 Input Empty';
    } else if (d1 !== '' && d2 === '' && d3 !== '') {
      return 'N2 Empty';
    } else if (d1 !== '' && d2 !== '' && d3 === '') {
      return 'N3 Empty';
    } else {
      return 'All Inputs Empty';
    }
  };

  const q5Handler = () => {
    const n1 = q51Input.current.value;
    const n2 = q52Input.current.value;
    const n3 = q53Input.current.value;

    setQ5(avg(n1, n2, n3));
  };

  //Q6

  const findCat = (data) => {
    if (data !== 0) {
      if (data >= 1 && data <= 10) {
        return 'Category 1';
      } else if (data >= 11 && data <= 20) {
        return 'Category 2';
      } else if (data >= 21 && data <= 30) {
        return 'Category 3';
      } else {
        return 'Enter Between 1 - 30 ';
      }
    } else {
      return 'Empty Input';
    }
  };

  const q6Handler = () => {
    const inputData = Number(q6Input.current.value);
    setQ6(findCat(inputData));
  };

  //Q7

  const checkPrice = (age) => {
    if (age >= 1 && age <= 17) {
      return 'Your Ticket is Free';
    } else if (age >= 18 && age <= 25) {
      return 'Your Ticket cost 100';
    } else if (age > 26) {
      return 'Your Ticket cost 200';
    } else if (age === 26) {
      return 'Your ticket is 150';
    } else {
      return 'Empty Input';
    }
  };

  const q7Handler = () => {
    const inputData = Number(q7Input.current.value);
    setQ7(checkPrice(inputData));
  };

  //Q8

  const check3 = (data) => {
    if (data !== 0) {
      if (data >= 3) {
        return 'I am >= 3';
      } else if (data === 3) {
        return 'I am 3';
      } else if (data >= 1 && data < 3) {
        return 'I am < 3';
      } else {
        return 'I am other';
      }
    } else {
      return 'Empty Input';
    }
  };

  const q8Handler = () => {
    const inputData = Number(q8Input.current.value);
    setQ8(check3(inputData));
  };

  //Q9

  const checkEntry = (data) => {
    if (data !== 0) {
      if (data >= 18) {
        return 'Authorized';
      } else {
        return 'UnAuthorized';
      }
    } else {
      return 'Empty Input';
    }
  };

  const q9Handler = () => {
    const inputData = Number(q9Input.current.value);
    setQ9(checkEntry(inputData));
  };

  return (
    <>
      <h1> HomeWork</h1>

      {/* Q1 */}

      <div className={styles.question}>
        <span>
          Q1: Make an arrow function named (is18) pass a value, the function
          must return true if the given age is 18 otherwise return false{' '}
        </span>
        <Card>
          <div>
            <label htmlFor="numInput"> Input: </label>
            <input
              type="number"
              min="0"
              placeholder="Please Enter a Number"
              id="numInput"
              ref={q1Input}
              onChange={q1Handler}
            />
          </div>
          <div>
            <label htmlFor="numInput"> Result: </label>
            <span>{q1}</span>
          </div>
        </Card>
      </div>

      <hr />

      {/* Q2 */}
      <div className={styles.question}>
        <span>
          Q2: Make an arrow function named (isGreaterThan18) , pass a value ,
          the function must return true if the given age is greater or equals to
          18 otherwise false
        </span>
        <Card>
          <div>
            <label htmlFor="numInput"> Input: </label>
            <input
              type="number"
              min="0"
              placeholder="Please Enter a Number"
              id="numInput"
              ref={q2Input}
              onChange={q2Handler}
            />
          </div>
          <div>
            <label htmlFor="numInput"> Result: </label>
            <span>{q2}</span>
          </div>
        </Card>
      </div>

      <hr />

      {/* Q3 */}
      <div className={styles.question}>
        <span>
          Q3: Make an arrow function that take a number and return you can enter
          room only if the enter number is less than 18 else you can not enter
        </span>
        <Card>
          <div>
            <label htmlFor="numInput"> Input: </label>
            <input
              type="number"
              min="0"
              placeholder="Please Enter The Age"
              id="numInput"
              ref={q3Input}
              onChange={q3Handler}
            />
          </div>
          <div>
            <label htmlFor="numInput"> Result: </label>
            <span>{q3}</span>
          </div>
        </Card>
      </div>

      <hr />

      {/* Q4 */}
      <div className={styles.question}>
        <span>
          Q4: Make an arrow function named (isEven) , pass a value, that retrun
          true if the given number is even else return false
        </span>
        <Card>
          <div>
            <label htmlFor="numInput"> Input: </label>
            <input
              type="number"
              min="0"
              placeholder="Please Enter The Age"
              id="numInput"
              ref={q4Input}
              onChange={q4Handler}
            />
          </div>
          <div>
            <label htmlFor="numInput"> Result: </label>
            <span>{q4}</span>
          </div>
        </Card>
      </div>

      <hr />

      {/* Q5*/}
      <div className={styles.question}>
        <span>
          Q5: Make an arrow function that takes 3 input as number and return
          average of given number
        </span>
        <Card>
          <div>
            <label htmlFor="numInput"> Input: </label>
            <input
              type="number"
              min="1"
              placeholder="N1"
              id="numInput"
              ref={q51Input}
              onChange={q5Handler}
              style={{ maxWidth: '2rem', display: 'inline' }}
            />
            <input
              type="number"
              min="1"
              placeholder="N2"
              id="numInput"
              ref={q52Input}
              onChange={q5Handler}
              style={{ maxWidth: '2rem', display: 'inline' }}
            />
            <input
              type="number"
              min="1"
              placeholder="N3"
              id="numInput"
              ref={q53Input}
              onChange={q5Handler}
              style={{ maxWidth: '2rem', display: 'inline' }}
            />
          </div>
          <div>
            <label htmlFor="numInput"> Result: </label>
            <span>{q5}</span>
          </div>
        </Card>
      </div>

      <hr />
      {/* Q6*/}
      <div className={styles.question}>
        <span>
          Q6: make an arrow function that takes one input as number and return
          "category1" for number range from 1 to10, return "category2" for
          number range from 11 to 20, return "category3" for number range form
          21 to 30
        </span>
        <Card>
          <div>
            <label htmlFor="numInput"> Input: </label>
            <input
              type="number"
              min="1"
              placeholder="N1"
              id="numInput"
              ref={q6Input}
              onChange={q6Handler}
            />
          </div>
          <div>
            <label htmlFor="numInput"> Result: </label>
            <span>{q6}</span>
          </div>
        </Card>
      </div>

      <hr />
      {/* Q7*/}
      <div className={styles.question}>
        <span>
          Q7: make a arrow function that takes a input as number that perform if
          age [upto 17], retrun your ticket is free if age[18 to 25 ], return
          your ticket cost 100 if age[more than 26], return your ticket cost 200
          if age===26 return your ticket is 150
        </span>
        <Card>
          <div>
            <label htmlFor="numInput"> Input: </label>
            <input
              type="number"
              min="1"
              placeholder="N1"
              id="numInput"
              ref={q7Input}
              onChange={q7Handler}
            />
          </div>
          <div>
            <label htmlFor="numInput"> Result: </label>
            <span>{q7}</span>
          </div>
        </Card>
      </div>

      <hr />
      {/* Q8*/}
      <div className={styles.question}>
        <span>
          {`  Q8: make a function that take a number
 			if number >=3 console i am greater or equal to 3
 			if number ===3 console i am 3
 			if number<3 console i am less than3
 			else show i am other`}
        </span>
        <Card>
          <div>
            <label htmlFor="numInput"> Input: </label>
            <input
              type="number"
              min="1"
              placeholder="N1"
              id="numInput"
              ref={q8Input}
              onChange={q8Handler}
            />
          </div>
          <div>
            <label htmlFor="numInput"> Result: </label>
            <span>{q8}</span>
          </div>
        </Card>
      </div>

      <hr />
      {/* Q9*/}
      <div className={styles.question}>
        <span>
          {`  Q9: make a function that takes input as number and return outupt You can watch movies if input is greater or equal to 18 else return "You are not authorized to watch movies`}
        </span>
        <Card>
          <div>
            <label htmlFor="numInput"> Input: </label>
            <input
              type="number"
              min="1"
              placeholder="N1"
              id="numInput"
              ref={q9Input}
              onChange={q9Handler}
            />
          </div>
          <div>
            <label htmlFor="numInput"> Result: </label>
            <span>{q9}</span>
          </div>
        </Card>
      </div>

      <hr />
    </>
  );
};

export default HomeWork;
