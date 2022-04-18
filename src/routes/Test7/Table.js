import { useMemo } from 'react';

import { useInput } from './inputContext';
import DATA from './_data';

const Table = () => {
  const [input] = useInput();

  const memoizedData = useMemo(() => {
    return DATA.filter((el) =>
      el.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    );
  }, [input]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {memoizedData.map((eachrow, idx) => (
          <tr key={idx}>
            <td>{eachrow.name}</td>
            <td>{eachrow.age}</td>
            <td>{eachrow.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
