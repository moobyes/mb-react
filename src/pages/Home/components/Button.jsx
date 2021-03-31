import React from 'react';

function Button({ name, children }) {
  function changeName(_name) {
    console.log('11');
    return `${_name}改变name的方法`;
  }

  const otherName = changeName(name);
  return (
    <>
      <div>{otherName}</div>
      <div>{children}</div>
    </>

  );
}

export default Button;
