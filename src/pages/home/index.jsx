// 导入store
import store from "../../store";
// 导入action
import sendAction from "../../action";
import React from "react";
import { useEffect, useState } from "react";
function Home() {
  const handleClick = () => {
    const action = sendAction();
    // 发送action
    store.dispatch(action);
  };
  const value = store.getState().value;
  const [storeValue, setStoreValue] = useState(value);
  // 当组件一加载完毕的时候，来监听
  useEffect(() => {
    // 监听store的变化
    store.subscribe(() => {
      console.log("store", store.getState());

      setStoreValue(store.getState().value);
    });
  }, []); // 空数组，表示只执行一次
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => handleClick()}>点我</button>
      <div>{storeValue}</div>
    </div>
  );
}

export default Home;
