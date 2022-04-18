import { useState } from 'react';
import { useInput } from './inputContext';

const Input = () => {
  const [value, setValue] = useState('');
  const [, setInput] = useInput();

  const handleChangeInput = (e) => {
    setValue(e.target.value);
  };

  const handleSubmitInput = (e) => {
    e.preventDefault();
    setInput(value);
  };

  return (
    <form onSubmit={handleSubmitInput}>
      <input
        type="text"
        placeholder="search"
        value={value}
        onChange={handleChangeInput}
      />
      <button type="submit">🔍</button>
    </form>
  );
};

export default Input;
