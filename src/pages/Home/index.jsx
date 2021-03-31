import React, { useState } from 'react';
import Button from './components/Button';
import './style.scss';
// import styles from './style';
import meeting from '../../assets/images/test.png';

// export default class Home extends Component {
//   render() {
//     return (
//       <div className={styles.box}>
//         <div>首页样式展示</div>
//         <img src={meeting} alt="会议" />
//       </div>
//     );
//   }
// }

export default function Home() {
  const [name, setName] = useState('名称');
  const [content, setContent] = useState('内容');
  return (
    <>
      <div>首页样式展示</div>
      <img src={meeting} alt="会议" />
      <button type="button" onClick={() => setName(new Date().getTime())}>name</button>
      <button type="button" onClick={() => setContent(new Date().getTime())}>content</button>
      <Button name={name}>{content}</Button>
    </>
  );
}
