import { useState } from 'react';
import StateCounter from './StateCounter';

export default function StateParent() {
  const [count, setCount] = useState(0);

  const update = step => setCount(c => c + step);
  return (
    <>
      <p>総カウント : {count}</p>
      <StateCounter onUpdate={update} step={1} />
      <StateCounter onUpdate={update} step={5} />
      <StateCounter onUpdate={update} step={-1} />
    </>
  )
}