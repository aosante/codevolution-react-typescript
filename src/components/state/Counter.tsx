import { useReducer } from 'react';

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: 'INCREMENT' | 'DECREMENT';
  payload: number;
};

type ResetAction = {
  type: 'RESET';
};

type CounterAction = UpdateAction | ResetAction;

const intialState = { count: 0 };

const counterReducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.payload };
    case 'DECREMENT':
      return { count: state.count + action.payload };
    case 'RESET':
      return intialState;
    default:
      return state;
  }
};

export const Counter = () => {
  // typescript infers the action and state types from the passed reducer function
  const [{ count }, dispatch] = useReducer(counterReducer, intialState);
  return (
    <>
      Count: {count}
      <button onClick={() => dispatch({ type: 'INCREMENT', payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT', payload: 10 })}>
        Decrement 10
      </button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </>
  );
};
