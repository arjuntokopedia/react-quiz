import { useState } from 'react';

import Input from './Input';
import Label from './Label';

const Test2 = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    setValue('');
  };

  return (
    <div>
      <ul>
        <li>Render user input value inside the label below</li>
        <li>
          show "close button" only when hovered, and clear the input value when
          clicked.
        </li>
      </ul>
      <p>
        <Label value={value} onClick={handleClick} />
      </p>
      <Input value={value} onChange={handleChange} />
    </div>
  );
};

export default Test2;
