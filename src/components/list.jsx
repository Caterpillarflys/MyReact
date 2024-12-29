import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/list/actions";

const Counter = () => {
  const count = useSelector((state) => state.module1.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>计数器: {count}</h1>
      <button onClick={() => dispatch(increment())}>增加</button>
      <button onClick={() => dispatch(decrement())}>减少</button>
    </div>
  );
};

export default Counter;
