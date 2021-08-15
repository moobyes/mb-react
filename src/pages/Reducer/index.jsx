/*
 * @Description: 尝试reducer
 * @Author: Moobye
 * @Date: 2021-02-02 19:11:44
 * @LastEditTime: 2021-08-04 17:20:12
 * @LastEditors: Moobye
 */
import React, {
  useState, useReducer, useRef, useEffect, createRef,
} from 'react';
import store from '../../store';
import sendAction from '../../store/action';

console.log('store :>> ', store);

// 官方 useReducer Demo
// 第一个参数：应用的初始化
const initialState = { count: 0 };

// 第二个参数：state的reducer处理函数
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  // 返回值：最新的state和dispatch函数
  const [state, dispatch] = useReducer(reducer, initialState);
  const [testVal, setTestVal] = useState();
  // const refInput = useRef(null);
  // console.log('refInput :>> ', refInput);
  // useEffect(() => {
  //   const inpVal = refInput.current && refInput.current.focus();
  //   console.log('abc :>> ', inpVal);
  // }, []);
  const ref1 = createRef();
  const ref2 = useRef();
  let ref3 = null;
  function handleClick() {
    ref2.current.focus();
  }

  function setRef(ele) {
    ref3 = ele;
  }

  // redux 事件
  const handleRedux = () => {
    const actions = sendAction('测试个动');
    store.dispatch(actions);
  };

  useEffect(() => {
    handleClick();
    // console.log('ref1 :>> ', ref3);
    const stateVal = store.getState().value;
    console.log('stateVal :>> ', stateVal);
    setTestVal(stateVal);
  }, []);

  return (
    <>
      {/* useReducer会根据dispatch的action，返回最终的state，并触发rerender */}
      {/* Count: {' '} */}
      {/* <input ref={refInput} /> */}
      <form ref={ref1}>
        <label>用户信息</label>
        <input type="text" ref={ref2} />
        <input type="text" ref={setRef} />
      </form>
      <div>{state.count}</div>
      <div>{testVal}</div>
      {/* dispatch 用来接收一个 action参数「reducer中的action」，用来触发reducer函数，更新最新的状态 */}
      <button type="button" onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button type="button" onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button type="button" onClick={handleRedux}>handleRedux</button>
    </>
  );
}

export default Counter;
