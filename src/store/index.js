/*
 * @Description: store
 * @Author: Moobye
 * @Date: 2021-08-02 17:01:34
 * @LastEditTime: 2021-08-04 17:03:27
 * @LastEditors: Moobye
 */

import { createStore } from 'redux';
import rootReducer from './reducer/index';

const store = createStore(rootReducer);

export default store;
