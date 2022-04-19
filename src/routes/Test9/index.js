import { useState } from 'react';

import Solar from './Solar';

const Test9 = () => {
  const [planetNumber, setPlanetNumber] = useState('');

  const handleChange = (e) => {
    if (!isNaN(+e.target.value)) {
      setPlanetNumber(e.target.value);
    }
  };

  return (
    <>
      <ul>
        <li>Make a solar system</li>
        <li>Number of planets must revolves around the sun</li>
        <li>The color of each planet must be unique</li>
        <li>More far the planet = more time it's revolves</li>
      </ul>
      <input
        type="text"
        placeholder="number of planet"
        onChange={handleChange}
        value={planetNumber}
      />
      <Solar planetNumber={planetNumber} />
    </>
  );
};

export default Test9;
