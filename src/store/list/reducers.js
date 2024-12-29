import { createReducer } from "@reduxjs/toolkit";
import { increment, decrement } from "./actions";

// Reducers是一个纯函数，它接收state和一个 action 作为输入，根据action.type判断，返回一个新的状态

const initialState = {
  count: 0,
};

// 使用 @reduxjs/toolkit 提供的 createReducer 函数来改写 reducer，使得代码更加简洁和易于维护。
// 这里利用了 createReducer 函数结合构建器（builder）模式，以一种更直观的方式
// 来定义 reducer 中不同动作对应的状态更新逻辑。它内部会处理好不可变更新等问题，
// 我们可以直接修改 state 对象的属性了（虽然看起来是直接修改，但底层实际是进行了正确的不可变操作）。
export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.count++;
    })
    .addCase(decrement, (state) => {
      state.count--;
    });
});

// 未使用 @reduxjs/toolkit 时，自定义reducer
// export const counterReducer = (state = 0, action) =>{
//   switch (action.type) {
//     case "INCREMENT_COUNTER":
//       return state + 1;

//     case "DECREMENT_COUNTER":
//       return state - 1;

//     default:
//       return state;
//   }
// }
