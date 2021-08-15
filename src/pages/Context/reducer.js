/*
 * @Description: context reducer
 * @Author: Moobye
 * @Date: 2021-08-05 22:16:35
 * @LastEditTime: 2021-08-06 14:36:57
 * @LastEditors: Moobye
 */
import React, { useReducer, createContext } from 'react';

const initialState = { count: 0 };
const myContext = createContext();
const { Provider } = myContext;

function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function elseReducer(state, action) {
  return state;
}

const myReducers = {
  countReducer: reducer,
  elseReducer,
};

const combineReducers = (reducers) => {
  // 先判断object这个参数是否否和要求 judge(reducers)
  const reducerKeys = Object.keys(reducers);
  const finalReducer = (state, action) => {
    // const finalState = {};
    let newState = state;
    reducerKeys.forEach((key) => {
      const nowReducer = reducers[key];
      // finalReducer[key] = nowReducer(state, action);
      newState = nowReducer(state, action);
    });
    return newState;
  };
  return finalReducer;
};

const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(combineReducers(myReducers), { count: 0 });
  const { children } = props;
  return (
    <Provider value={{ state, dispatch }}>
      {children}
    </Provider>
  );
};

export { reducer, myContext, ContextProvider };
