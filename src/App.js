import "./App.css";

// 导入之前创建好的 Redux store
import { Provider } from "react-redux";
import store from "./store/store";

import MyRouter from "./router";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MyRouter></MyRouter>
      </div>
    </Provider>
  );
}

export default App;
