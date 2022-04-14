import { useState, createContext } from 'react';

import { cssWrapper } from './style';

import Comp1 from './Comp1';
import Comp3 from './Comp3';

const question = (
  <ul>
    <li>
      primarily, user can input the value from <code>#mynumber</code>
    </li>
    <li>
      please add or reduce the value by 1 when user click{' '}
      <code>#numbermin</code> and <code>#numberplus</code> button
    </li>
    <li>
      Show <b>ODD</b> or <b>EVEN</b> in first render section
    </li>
    <li>
      only show <code>#mynumber1</code> input when <code>#overwrite</code>{' '}
      checkbox is checked in <code>Comp1</code>
    </li>
    <li>
      user can input in <code>#mynumber1</code> and render the latest source of
      input in <code>Comp1</code> and it's value in <code>Comp2</code>
    </li>
    <li>
      <code>Comp2</code> will display latest inputted from{' '}
      <code>#mynumber</code> &amp; <code>#mynumber1</code>
    </li>
    <li>
      <code>Comp3</code> will display <code>#mynumber</code>
    </li>
    <li>
      show <code>Comp4</code> modal when user click <b>Show Modal</b> button in{' '}
      <code>Comp3</code>
    </li>
    <li>
      update whole <code>input</code> and value render when user input{' '}
      <code>#mynumber2</code>
    </li>
  </ul>
);

export const MyNumberContext = createContext();
export const MyNumber2Context = createContext();

const Test5 = () => {
  const [myNumber, setMyNumber] = useState('');
  const [myNumber1, setMyNumber1] = useState('');
  const [latestInput, setLatestInput] = useState('myNumber');
  const [myNumber2, setMyNumber2] = useState('');

  const handleChangeMyNumber = (e) => {
    if (!isNaN(+e.target.value)) {
      setMyNumber(e.target.value);
      setLatestInput('myNumber');
    }
  };

  const handleMin = () => {
    if (!isNaN(+myNumber)) {
      setMyNumber(String(+myNumber - 1));
    }
  };

  const handlePlus = () => {
    if (!isNaN(+myNumber)) {
      setMyNumber(String(+myNumber + 1));
    }
  };

  const renderNumberType = (num) => {
    if (num === '') return '[ODD / EVEN]*';
    if (num % 2 === 0) return 'EVEN';
    return 'ODD';
  };

  const handleChangeMyNumber1 = (e) => {
    if (!isNaN(+e.target.value)) {
      setMyNumber1(e.target.value);
      setLatestInput('myNumber1');
    }
  };

  return (
    <div>
      {question}
      <button id="numbermin" type="button" onClick={handleMin}>
        -
      </button>
      <input
        id="mynumber"
        type="text"
        placeholder="input mynumber"
        value={myNumber}
        onChange={handleChangeMyNumber}
      />
      <button id="numberplus" type="button" onClick={handlePlus}>
        +
      </button>
      <br />
      <br />
      <div className={cssWrapper}>
        The inputted value is {renderNumberType(myNumber)}
      </div>
      <MyNumber2Context.Provider
        value={{ myNumber2, setMyNumber2, setMyNumber, setMyNumber1 }}
      >
        <Comp1
          latestValue={latestInput === 'myNumber' ? myNumber : myNumber1}
          value={myNumber1}
          onChange={handleChangeMyNumber1}
        />
        <MyNumberContext.Provider value={myNumber}>
          <Comp3 />
        </MyNumberContext.Provider>
      </MyNumber2Context.Provider>
    </div>
  );
};

export default Test5;
