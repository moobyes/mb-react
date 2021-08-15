import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import Home from '../../pages/Home';
import About from '../../pages/About/index';
import Reducer from '../../pages/Reducer/index';
import Context from '../../pages/Context/index';

const StateComponent = lazy(() => import('../../pages/State'));

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
          <li>
            <Link to="/State">测试State</Link>
          </li>
          <li>
            <Link to="/context">测试Context</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/reducer" component={Reducer} />
            <Route path="/State" component={StateComponent} />
            <Route path="/context" component={Context} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default hot(Layout);
