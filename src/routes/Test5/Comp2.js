import { cssWrapper } from './style';

const Comp2 = ({ latestValue }) => {
  return (
    <>
      <div className={cssWrapper}>Latest inputted value is: {latestValue}</div>
    </>
  );
};

export default Comp2;
