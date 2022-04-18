import * as React from 'react';

const InputContext = React.createContext();

function InputProvider({ children }) {
  const [input, setInput] = React.useState('');

  const value = [input, setInput];
  return (
    <InputContext.Provider value={value}>{children}</InputContext.Provider>
  );
}

function useInput() {
  const context = React.useContext(InputContext);

  if (context === undefined) {
    throw new Error('useInput must be used within an InputProvider');
  }

  return context;
}

export { InputProvider, useInput };
