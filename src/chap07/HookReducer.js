import { useReducer } from 'react';

export default function HookReducer({ init }) {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'update':
          return { count: state.count + 1 };
        default:
          return state;
      }
    },
    {
      count: init
    }
  );

  const handleClick = () => {
    dispatch({ type: 'update' });
  };

  return (
    <>
      <button onClick={handleClick}>カウントアップ</button>
      <p>カウント: {state.count}</p>
    </>
  )
}