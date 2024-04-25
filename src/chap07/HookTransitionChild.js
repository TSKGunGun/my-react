import { memo } from 'react';
import books from './books';
import MyLoading from './MyLoading';

const sleep = delay => {
  const start = new Date();
  while (new Date() - start < delay);
}

export const BookDetails = ( { isbn } ) => {
  const book = books.find(b => b.isbn === isbn);

  return (
    <ul>
      <li>ISBN: {book?.isbn}</li>
      <li>書名: {book?.title}</li>
      <li>価格: {book?.price}円</li>
      <li>概要: {book?.summary}</li>
      <li>配布サンプル: { (book?.download) ? 'あり' : 'なし' }</li>
    </ul>
  );
}


const CommentListBase = ( { src, isPending } ) => {
  if(isPending) return <MyLoading />;

  return (
    <ol>
      {src.map(c => <CommentItem key={c.id} src={c} />)}
    </ol>
  );
}

function CommentItem( { src } ) {
  sleep(1000);
  return <li>{src.body} ({src.rank})</li>;
}

export const CommentList = memo(CommentListBase);