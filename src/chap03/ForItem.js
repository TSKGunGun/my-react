import React from 'react';

export default function ForItem({ books }) {
  return (
    <>
    <dt className='p-1'>
      <a href={`https://wings.msn.to/books/${books.isbn}/${books.isbn}.jpg`}>
        <img src={`https://wings.msn.to/books/${books.isbn}/${books.isbn}.jpg`} className='w-20'/>
        <span className='text-lg font-bold'>
          {books.title}
          </span>
          <span className='font-bold text-sm ml-2'>
           ({books.price}円)
          </span>
      </a>
    </dt>
    <dd className='mb-5'>
      {books.summary}
    </dd>
    </>
  )
};
  