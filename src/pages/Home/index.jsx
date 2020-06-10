import React, { Component } from "react";
// import "./style.scss";
import styles from "./style";
import meeting from "../../assets/images/test.png";

export default class Home extends Component {
  render() {
    return (
      <div className={styles.box}>
        <div>首页样式展示</div>
        <img src={meeting} alt="会议" />
      </div>
    );
  }
}

// export default function Home() {
//   return <div className={styles.box}>测试组件</div>;
// }
