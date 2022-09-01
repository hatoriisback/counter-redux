// todo // Import Hooks-nya

// * useSelector dan useDispatch dari react-redux
import { useDispatch, useSelector } from "react-redux";

// ? import action-nya
import {
  increment,
  decrement,
  incrementByTen,
} from "../store/slices/counterSlice";

const Counter = () => {
  const counter = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="demo">
      <h1>let's Count Functionally!</h1>
      <hr />
      <h1>{counter}</h1>
      <button
        onClick={() => dispatch(increment())}
        style={{ marginRight: "1em" }}
      >
        Tambah
      </button>
      <button
        onClick={() => dispatch(decrement())}
        style={{ marginRight: "1em" }}
      >
        Kurang
      </button>
      <button onClick={() => dispatch(incrementByTen())}>Tambah 10</button>
    </div>
  );
};

export default Counter;
