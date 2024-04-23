import { useState } from "react";

export default function StateBasic( { init=0 }) {
  const [count, setCount] = useState(init);
  const handleClick = () => setCount(count + 1);

  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <p>{count}回、カウントされました。</p>
    </>
  )
}