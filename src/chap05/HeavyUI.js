function sleep(delay) {
  let start = Date.now();
  while (Date.now() - start < delay);
}

export default function HeavyUI({ delay }) {
  sleep(delay);
  return (
    <div>
      <p>遅延時間は{delay}ミリ秒</p>
    </div>
  );
}