import React, {
  useState, useEffect, useRef, createRef,
} from 'react';

const page1 = (props) => {
  const html1 = createRef();
  const html2 = useRef();

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(html1);
    console.log(html2);
  }, []);

  // useEffect(() => {
  //   if (!store.ref1) {
  //     store.ref1 = ref1;
  //   } else {
  //     console.log(store.ref1 === ref1);
  //   }
  // });

  useEffect(() => {
    setTimeout(() => {
      setCount(1);
    }, 1000);
  }, []);

  return (
    <form ref={html1}>
      <label>用户信息</label>
      <input type="text" ref={html2} />
    </form>
  );
};

export default page1;
