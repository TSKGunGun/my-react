import './css/SelectStyle.css';
import cn from 'classnames';

export default function SelectStyle( {mode} ) {
  return (
    <div className={cn('box', mode === 'light' ? 'light' : 'dark', 'boxLayout')}>
      こんにちは、世界!
    </div>
  )
}