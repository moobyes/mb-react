import React, { useContext } from 'react';
import { myContext } from './reducer';

function Counter() {
  const { state, dispatch } = useContext(myContext);
  return (
    <div>
      <div>{state.count}</div>
      <button onClick={() => dispatch({ type: 'increment' })} type="button">increment</button>
    </div>
  );
}

export default Counter;
