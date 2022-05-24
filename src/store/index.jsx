import { createStore } from "redux";
// 导入我们自己创建的reducer

import reducer from "../reducer";
// 构建sotre
const store = createStore(reducer);
// 导出store
export default store;
