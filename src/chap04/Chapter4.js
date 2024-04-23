import React from 'react';
import StateForm from './StateForm';
import StateFormUC from './StateFormUC';

export default function Chapter4Component() {
  return (
    <>
      <h1>Chapter 4</h1>
      <div className='chapter'>
        <h2>4-1-2</h2>
        <StateForm />
      </div>
      <div className='chapter'>
        <h2>4-1-4</h2>
        <StateFormUC />
      </div>
    </>
  )
}