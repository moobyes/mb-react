/*
 * @Description: action
 * @Author: Moobye
 * @Date: 2021-08-02 16:41:01
 * @LastEditTime: 2021-08-04 17:14:19
 * @LastEditors: Moobye
 */
const sendAction = (newVal) => ({
  type: 'send_type',
  value: newVal,
});

export default sendAction;
