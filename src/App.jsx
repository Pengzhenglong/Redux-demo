// import Home from "./pages/home/index.jsx";
import store from "./store";
import ComA from "./pages/ComA/index.jsx";
import ComB from "./pages/ComB/index.jsx";
import { Provider } from "react-redux";
// 导入Provider组件，利用这个组件包裹我们的结构，从而能够达到统一维护store的目的
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Home /> */}
        <ComA />
        <ComB />
      </div>
    </Provider>
  );
}

export default App;
