import React from 'react';
import ForItem from './ForItem';

export default function ForList({ src }) {
  const showBooks = src.filter(item => item.price < 4000).sort((a, b) => b.price - a.price);
  
  return (
    <dl>
      { showBooks.map(elem => (
        <div className='p-5 border-solid border-blue-800 rounded border-2 mb-4'> 
          <ForItem key={elem.isbn} books={elem} />
        </div>
       ))
      }
    </dl>
  )
}