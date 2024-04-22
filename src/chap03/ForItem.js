import React from 'react';
import Download from './Download';

export default function ForItem({ book }) {
  return (
      <>
      <dt className='p-1'>
        <a href={`https://wings.msn.to/books/${book.isbn}/${book.isbn}.jpg`}>
          <img src={`https://wings.msn.to/books/${book.isbn}/${book.isbn}.jpg`} className='w-20' alt={book.title}/>
          <span className='text-lg font-bold'>
            {book.title}
            </span>
            <span className='font-bold text-sm ml-2'>
            ({book.price}円)
            </span>
        </a>
      </dt>
      <dd>
        {book.summary}
        {book.download && <Download isbn={book.isbn} />}
      </dd>
    </>
  )
};
  