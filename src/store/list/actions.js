/*
 * 未使用 @reduxjs/toolkit 时，正常定义actions
 * Actions是一个包含type属性的普通 JavaScript 对象，用于描述发生了什么事情。
 * 如{type: 'ADD_TODO', text: 'Buy groceries'}用于添加一个待办事项。
 */

// 创建增加计数的动作创建函数
// export const increment = () => {
//   return {
//     type: INCREMENT,
//   };
// };

// // 创建减少计数的动作创建函数
// export const decrement = () => {
//   return {
//     type: DECREMENT,
//   };
// };

/*
 * 在使用 @reduxjs/toolkit 时，动作创建函数的编写可以更简洁，代码如下：
 */

// 这里使用了 createAction 函数来创建动作创建函数，它会自动帮我们生成包含正确 type 属性的动作对象，并且在底层做了一些优化（比如不可变更新等）。
import { createAction } from "@reduxjs/toolkit";

// 创建增加计数的动作创建函数
export const increment = createAction("INCREMENT");

// 创建减少计数的动作创建函数
export const decrement = createAction("DECREMENT");
