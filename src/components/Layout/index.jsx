import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import Home from '../../pages/Home';
import About from '../../pages/About/index';
import Reducer from '../../pages/Reducer/index';

function Layout(props) {
  console.log('This is Router :>> ', props);
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/about">关于</Link>
          </li>
          <li>
            <Link to="/reducer">测试Reducer</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/reducer" component={Reducer} />
        </Switch>
      </div>
    </Router>
  );
}

export default hot(Layout);
