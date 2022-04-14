const Input = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="search"
        value={value}
        onChange={onChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
};

export default Input;
