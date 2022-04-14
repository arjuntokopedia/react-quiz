import { useState } from 'react';

const Test1 = () => {
  const [input, setInput] = useState('');
  return (
    <div>
      <ul>
        <li>Please render the inputted value</li>
      </ul>
      <p>
        <b>User Input: </b> {input}
      </p>
      <input
        type="text"
        placeholder="input here"
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default Test1;
