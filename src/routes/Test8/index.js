import { useState } from 'react';

import Modal from './Modal';
import { cssForm } from './style';

export const initialInput = {
  name: '',
  age: '',
  address: '',
};

const Test8 = () => {
  const [inputValue, setInputValue] = useState(initialInput);
  const [showModal, setShowModal] = useState(false);

  // ONLY ONE HANDLE METHOD ALLOWED
  const handleInput = (e) => {
    setInputValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowModal(true);
  };

  return (
    <div>
      <ul>
        <li>User can input the form - only 1 handle method is allowed</li>
        <li>When submit display the modal</li>
        <li>Show the form value inside the modal</li>
        <li>
          Reset the form and close the modal when user click the reset button
        </li>
      </ul>
      <form className={cssForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={inputValue.name}
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="age"
          name="age"
          value={inputValue.age}
          onChange={handleInput}
        />
        <textarea
          type="text"
          placeholder="address"
          name="address"
          value={inputValue.address}
          onChange={handleInput}
        />
        <button type="submit">Submit</button>
      </form>
      {/* Only Show the modal when user clicked submit */}
      {showModal && (
        <Modal
          value={inputValue}
          setShowModal={setShowModal}
          setInputValue={setInputValue}
        />
      )}
    </div>
  );
};

export default Test8;
