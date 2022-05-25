// 这个文件是创建reducer函数的，专门用来处理发送过来的action

const initState = {
  count: 100,
};
const reducer = (state = initState, action) => {
  console.log("reducer", state, action);
  // 判断action的type属性是否为add_action
  switch (action.type) {
    case "add_action":
      return {
        count: state.count + 1,
      };
    default:
      return state;
  }
  // return state;
};
export default reducer;
