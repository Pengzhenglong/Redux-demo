// 这个文件是创建reducer函数的，专门用来处理发送过来的action

const initState = {
  value: "默认值",
};
const reducer = (state = initState, action) => {
  console.log("reducer", state, action);
  switch (action.type) {
    case "send_type":
      return Object.assign({}, state, action);
    default:
      return state;
  }
};
export default reducer;
