import { useState } from 'react';

export default function EventMouse( { beforeSrc, afterSrc, alt}) {
  const [current, setCurrent] = useState(beforeSrc);

  const handleEnter = () => {
    console.log("handleEnter");
    setCurrent(afterSrc);
  }
  const handleLeave = () => {
    console.log("handleLeave");
    setCurrent(beforeSrc);
  }

  return (
    <img src={current} alt={alt}
      onMouseEnter={handleEnter} onMouseLeave={handleLeave} />
  )
}