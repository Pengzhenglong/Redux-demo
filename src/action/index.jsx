// 这是action  的构建函数
const sendAction = () => {
  return {
    type: "send_type",
    value: "我是一个action",
  };
};

export default sendAction;
