// import React, { Component } from "react";
// import { hot } from "react-hot-loader/root";

// // function App() {
// //   return <div>hello react</div>;
// // }
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       data: "这是测试components",
//     };
//   }

//   render() {
//     return (
//       <div style={{ fontSize: "24px", color: "#999" }}>
//         这是什么啊？{this.state.data}
//       </div>
//     );
//   }
// }

// export default hot(App);
import React from "react";
import ReactDom from "react-dom";

// import getRouter from "./router/index";
import MainRouter from "./router/index";

ReactDom.render(<MainRouter />, document.getElementById("root"));
