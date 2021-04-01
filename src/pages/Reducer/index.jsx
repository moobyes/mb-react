/*
 * @Description: 尝试reducer
 * @Author: Moobye
 * @Date: 2021-02-02 19:11:44
 * @LastEditTime: 2021-03-31 18:11:00
 * @LastEditors: Moobye
 */
import React, {
  useState, useReducer, useRef, useEffect, createRef,
} from 'react';

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
  // const refInput = useRef(null);
  // console.log('refInput :>> ', refInput);
  // useEffect(() => {
  //   const inpVal = refInput.current && refInput.current.focus();
  //   console.log('abc :>> ', inpVal);
  // }, []);
  const ref1 = createRef();
  const ref2 = useRef();
  useEffect(() => {
    if (!store.ref1) {
      store.ref1 = ref1;
    } else {
      console.log(store.ref1 === ref1);
    }
  }, []);

  return (
    <>
      {/* useReducer会根据dispatch的action，返回最终的state，并触发rerender */}
      {/* Count: {' '} */}
      {/* <input ref={refInput} /> */}
      <form ref={ref1}>
        <label>用户信息</label>
        <input type="text" ref={ref2} />
      </form>
      <div>{state.count}</div>
      {/* dispatch 用来接收一个 action参数「reducer中的action」，用来触发reducer函数，更新最新的状态 */}
      <button type="button" onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button type="button" onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}

export default Counter;
