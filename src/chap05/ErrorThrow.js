export default function ErrorThrow() {
  throw new Error('エラーが発生しました');
  return (
    <p>正しく実行されました。</p>
  );
}