export default function ErrorRetryThrow() {
  console.log('ErrorRetryThrow')
  if (Math.random() < 0.5) {
    throw new Error('エラーが発生しました');
  }
  return (
    <p>正しく実行されました。</p>
  );
}