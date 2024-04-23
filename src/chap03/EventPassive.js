import { useRef, useEffect } from 'react';
import './css/EventPassive.css'

export default function EventPassive() {
  const handleWheel = e => e.preventDefault();

  const divRef = useRef(null);
  useEffect(() => {
    const div = divRef.current;
    div.addEventListener('wheel', handleWheel, { passive: false });
    return (() => {
      div.remoteEventListener('wheel', handleWheel);
    })
  })

  return (
    <div className='box'
      onWheel={handleWheel}>
      例えばwheelイベントをハンドラーで...
    </div>
  )
}