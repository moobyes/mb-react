import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import Home from "../pages/Home/index";
import About from "../pages/About/index";

class MainRouter extends React.Component {
  render() {
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
          </ul>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default hot(MainRouter);

// export default getRouter;
