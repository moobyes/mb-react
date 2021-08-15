import React, { useState } from 'react';

function State(props) {
  const [count, setCount] = useState(() => {
    console.log('initaial :>> ');
    return props.defaultCount || 0;
  });
  return (
    <div>
      <div>{ count }</div>
      <button type="button" onClick={() => { setCount(count + 1); }}>测试</button>
    </div>
  );
}

export default State;
