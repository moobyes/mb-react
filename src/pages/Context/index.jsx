import React from 'react';
import { ContextProvider } from './reducer';
import Counter from './Counter';

function Context() {
  return (
    <ContextProvider>
      <Counter />
    </ContextProvider>
  );
}

export default Context;
