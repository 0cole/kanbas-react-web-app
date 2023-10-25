import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterReducer";

function CounterRedux() {
	const { count } = useSelector((state) => state.counterReducer);
	const dispatch = useDispatch();
	return (
		<div>
			<h2>Counter Redux</h2>
			<h3>{count}</h3>
			<button onClick={() => dispatch(increment())}>Increment </button>
			<button onClick={() => dispatch(decrement())}>Decrement </button>
            <button onClick={() => dispatch(reset())}>Reset </button>
		</div>
	);
}

export default CounterRedux;
