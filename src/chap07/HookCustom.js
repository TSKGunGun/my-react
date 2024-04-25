import useCounter from './useCounter';

export default function HookCustom() {
  const [state, handleUP, handleDown, handleReset] = useCounter(0, 1);
  return (
    <>
      <button onClick={handleUP}>UP</button>
      <button onClick={handleDown}>DOWN</button>
      <button onClick={handleReset}>RESET</button>
      <p>{state.count}回クリックされました。</p>
    </>
  );
}