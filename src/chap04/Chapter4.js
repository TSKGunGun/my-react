import React from 'react';
import StateForm from './StateForm';
import StateFormUC from './StateFormUC';
import FormTextarea from './FormTextarea';
import FormSelect from './FormSelect';
import FormList from './FormList';

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
      <div className='chapter'>
        <h2>4-1-5</h2>
        <FormTextarea />
      </div>
      <div className='chapter'>
        <h2>4-1-8</h2>
        <FormSelect />
      </div>
      <div className='chapter'>
        <h2>4-1-10</h2>
        <FormList />
      </div>
    </>
  )
}