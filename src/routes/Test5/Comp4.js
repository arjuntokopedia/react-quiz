import { useContext } from 'react';
import { MyNumber2Context } from '.';
import { ModalContext } from './Comp3';
import { cssWrapper, cssModalRight } from './style';

const Comp4 = (/* NO PROPS ALLOWED */) => {
  const { setShowModal } = useContext(ModalContext);
  const { myNumber2, setMyNumber2, setMyNumber, setMyNumber1 } =
    useContext(MyNumber2Context);

  const handleClickClose = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    if (!isNaN(+e.target.value)) {
      setMyNumber(e.target.value);
      setMyNumber1(e.target.value);
      setMyNumber2(e.target.value);
    }
  };

  return (
    <>
      <div className={cssWrapper}>
        <div className={cssModalRight}>
          Input Modal
          <button type="button" onClick={handleClickClose}>
            ⊗
          </button>
        </div>
        <input
          id="mynumber2"
          type="text"
          placeholder="input mynumber2"
          value={myNumber2}
          onChange={handleChange}
        ></input>
      </div>
    </>
  );
};

export default Comp4;
