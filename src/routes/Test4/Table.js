const Table = ({ data }) => {
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
        {data.map((el) => (
          <tr key={el.name + el.address}>
            <td>{el.name}</td>
            <td>{el.age}</td>
            <td>{el.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
