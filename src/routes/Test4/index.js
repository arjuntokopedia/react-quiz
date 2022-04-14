import { useState } from 'react';
import Input from './Input';
import Table from './Table';
import DATA from './_data';

const Test4 = () => {
  const [value, setValue] = useState('');
  const [displayData, setDisplayData] = useState(DATA);

  const handleChangeInput = (e) => {
    setValue(e.target.value);
  };

  const handleSubmitInput = (e) => {
    e.preventDefault();

    setDisplayData(
      DATA.filter((el) =>
        el.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      )
    );
  };

  return (
    <div>
      <ul>
        <li>Please render data into the table</li>
        <li>
          Please filter the table by name search (after press enter or click
          search button)
        </li>
      </ul>
      <Input
        value={value}
        onChange={handleChangeInput}
        onSubmit={handleSubmitInput}
      />
      <div>
        <Table data={displayData} />
      </div>
    </div>
  );
};

export default Test4;
