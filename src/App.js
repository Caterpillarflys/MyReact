import "./App.css";
import Father from "./components/father";
import List from "./components/list";

// 导入之前创建好的 Redux store
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Father></Father>
        <List></List>
      </div>
    </Provider>
  );
}

export default App;
