/*
 * @Description: reducer
 * @Author: Moobye
 * @Date: 2021-08-02 16:44:10
 * @LastEditTime: 2021-08-04 17:15:52
 * @LastEditors: Moobye
 */

const initState = {
  value: '默认值',
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'send_type':
      console.log('state :>> ', state, action);
      return { ...state, ...action };
    default:
      return state;
  }
};
export default rootReducer;
