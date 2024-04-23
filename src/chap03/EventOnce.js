import { useState } from 'react';

export default function EventOnce() {
  const [clicked, setClicked] = useState(false);

  const [result, setReuslt] = useState('');
  const handleClick = e => {
    if (!clicked) {
      setReuslt(Math.floor(Math.random() * 100) + 1);
      setClicked(true);
    }
  };

  return (
    <>
      <button onClick={handleClick} disabled={clicked}>クリック</button>
      <p>今日の運勢は{result}点です。</p>
    </>
  )
}
