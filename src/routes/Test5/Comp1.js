import { cssWrapper } from './style';

import { useState } from 'react';
import Comp2 from './Comp2';

const Comp1 = ({ value, latestValue, onChange }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    onChange(e);
  };

  return (
    <div className={cssWrapper}>
      Latest Inputted from <code>[Test5/Comp1]*</code>
      <br />
      <br />
      <label htmlFor="overwrite">
        Local overwrite:{' '}
        <input
          id="overwrite"
          type="checkbox"
          value={checked}
          onChange={() => setChecked(!checked)}
        />
        {/* only show when overwrite is checked */}
        {checked && (
          <input
            id="mynumber1"
            type="text"
            placeholder="input mynumber1"
            value={value}
            onChange={handleChange}
          />
        )}
      </label>
      <Comp2 latestValue={latestValue} />
    </div>
  );
};

export default Comp1;
