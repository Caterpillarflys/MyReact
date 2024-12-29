import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

// 使用@reduxjs/toolkit创建store
const store = configureStore({
  reducer: rootReducer,
});

// 未使用@reduxjs/toolkit，使用redux创建store
// import { createStore } from "redux";
// const store = createStore({
//   reducer: rootReducer,
// });

export default store;

// 这里使用 configureStore 创建 store，它默认包含了一些有用的中间件等配置。
// 并且通过 store.getActions() 可以获取到之前定义的动作创建函数，然后进行动作的派发操作。
// 注意，之前直接调用 increment() 和 decrement() 的方式在新的结构下是不行的，
// 需要通过 store.getActions() 来获取对应的动作创建函数再进行派发。
// 总的来说，经过这样的改写，代码更加符合现代 Redux 开发的模式，
// 利用了 @reduxjs/toolkit 提供的便捷功能，同时保持了原有的功能逻辑，
// 并且后续扩展和维护也会更加方便。如果要在 React 组件中使用这个 store，
// 还需要结合 react-redux 库按照相应规则来进行连接和使用等操作（这里示例主要聚焦在 Redux 本身的代码改写上）。
