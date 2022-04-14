import { cssWrapper } from './style';

import { useState, useContext, createContext } from 'react';
import Comp4 from './Comp4';
import { MyNumberContext } from '.';

export const ModalContext = createContext();

const Comp3 = (/* NO PROPS ALLOWED */) => {
  const [showModal, setShowModal] = useState(true);
  const myNumber = useContext(MyNumberContext);

  const handleClickModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <>
      <div className={cssWrapper}>The Inputted Value is: {myNumber}</div>
      <button type="button" onClick={handleClickModal}>
        Show Modal
      </button>
      {showModal && (
        <ModalContext.Provider value={{ showModal, setShowModal }}>
          <Comp4 />
        </ModalContext.Provider>
      )}
    </>
  );
};

export default Comp3;
