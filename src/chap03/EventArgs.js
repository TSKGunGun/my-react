export default function EventArgs() {
  const current = (e, type) => {
    const d = new Date();
    switch(type) {
      case 'date':
        console.log(`${e.target.id}: ${d.toLocaleDateString()}`);
        break;
      case 'time':
        console.log(`${e.target.id}: ${d.toLocaleTimeString()}`);
        break;
      default:
        console.log(`${e.target.id}: ${d.toLocaleString()}`);
        break;
    }
  };

  return (
    <div>
      <button className="m-2" id="dt" onClick={e => current(e, 'datetime')}>現在日時</button>
      <button className="m-2" id="date" onClick={e => current(e, 'date')}>現在日付</button>
      <button className="m-2" id="dtime" onClick={e => current(e, 'time')}>現在時刻</button>
    </div>
  )
}