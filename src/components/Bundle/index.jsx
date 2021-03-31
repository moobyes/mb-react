import React, { useState } from 'react';

const Bundle = (props) => {
  const [mod, setMod] = useState(null);
  const [prevProps, setPrevProps] = useState(null);

  // load 方法，用于更新 mod 状态
  function load(args) {
    // 初始化
    setMod(null);
    /*
      调用传入的 load 方法，并传入一个回调函数
      这个回调函数接收 在 load 方法内部异步获取到的组件，并将其更新为 mod
    */
    args.load((mods) => {
      const newMod = mods.default ? mods.default : mods;
      setMod(newMod);
    });
  }

  load(props);

  if (prevProps.load !== props.load) {
    load(props);
    setPrevProps(props);
  }

  /*
      将存在状态中的 mod 组件作为参数传递给当前包装组件的'子'
    */
  return mod ? props.children(mod) : null;
};

// class Bundle1 extends React.Component {
//   constructor(arg) {
//     super(arg);
//     this.state = {
//       mod: null,
//     };
//   }

//   componentWillMount() {
//     this.load(this.props);
//   }

//   componentWillReceiveProps(nextProps) {
//     if (nextProps.load !== this.props.load) {
//       this.load(nextProps);
//     }
//   }

//   // load 方法，用于更新 mod 状态
//   load(props) {
//     // 初始化
//     this.setState({
//       mod: null,
//     });
//     /*
//             调用传入的 load 方法，并传入一个回调函数
//             这个回调函数接收 在 load 方法内部异步获取到的组件，并将其更新为 mod
//         */
//     props.load((mod) => {
//       this.setState({
//         mod: mod.default ? mod.default : mod,
//       });
//     });
//   }

//   render() {
//     /*
//             将存在状态中的 mod 组件作为参数传递给当前包装组件的'子'
//         */
//     return this.state.mod ? this.props.children(this.state.mod) : null;
//   }
// }

export default Bundle;
