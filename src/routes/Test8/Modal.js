import { initialInput } from '.';
import { cssModal } from './style';

const Modal = ({ value, setShowModal, setInputValue }) => {
  const handleHideModal = () => {
    setShowModal(false);
    setInputValue(initialInput);
  };

  return (
    <div className={cssModal}>
      Name: {value.name}
      <br />
      Age: {value.age}
      <br />
      Address: {value.address}
      <br />
      <button onClick={handleHideModal}>Reset</button>
    </div>
  );
};

export default Modal;
