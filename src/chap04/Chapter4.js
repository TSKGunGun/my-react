import React from 'react';
import StateForm from './StateForm';
import StateFormUC from './StateFormUC';
import FormTextarea from './FormTextarea';
import FormSelect from './FormSelect';
import FormList from './FormList';
import FormRadio from './FormRadio';
import FormCheck from './FormCheck';
import FormCheckMulti from './FormCheckMulti';
import FormFile from './FormFile';
import StateNest from './StateNest';
import StateNestImmer from './StateNestImmer';
import StateNestImmer2 from './StateNestImmer2';
import StateTodo from './StateTodo';
import FormBasic from './FormBasic';
import FormYup from './FormYup';

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
      <div className='chapter'>
        <h2>4-1-12</h2>
        <FormRadio />
      </div>
      <div className='chapter'>
        <h2>4-1-14</h2>
        <FormCheck />
      </div>
      <div className='chapter'>
        <h2>4-1-16</h2>
        <FormCheckMulti />
      </div>
      <div className='chapter'>
        <h2>4-1-18</h2>
        <FormFile />
      </div>
      <div className='chapter'>
        <h2>4-2-2</h2>
        <StateNest />
      </div>
      <div className='chapter'>
        <h2>4-2-4</h2>
        <StateNestImmer />
      </div>
      <div className='chapter'>
        <h2>4-2-6</h2>
        <StateNestImmer2 />
      </div>
      <div className='chapter'>
        <h2>4-2-8</h2>
        <StateTodo />
      </div>
      <div className='chapter'>
        <h2>4-3-2</h2>
        <FormBasic />
      </div>
      <div className='chapter'>
        <h2>4-3-4</h2>
        <FormYup />
      </div>
    </>
  )
}