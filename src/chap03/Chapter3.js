import React from 'react';
import MyHello from './MyHello';
import EventBasic from './EventBasic';
import StateBasic from './StateBasic';
import books from './books';
import ForNest from './ForNest';
import SelectStyle from './SelectStyle';

export default function Chapter3Component() {
  return (
    <React.Fragment>
      <h1>Chapter 3</h1>
      <div className='chapter'>
        <h2>3-1-2</h2>
        <MyHello myName="鈴木"/>
      </div>
      <div className='chapter'>
        <h2>3-1-3</h2>
        <h3>Type=Date</h3>
        <EventBasic type="date" />
        <h3>Type=Time</h3>
        <EventBasic type="time" />
        <h3>Default</h3>
        <EventBasic />
      </div>
      <div className='chapter'>
        <h2>3-1-4</h2>
        <StateBasic init={0} />
      </div>
      <div className='chapter'>
        <h2>3-2-1</h2>
        <ForNest src={books} />
      </div>
      <div className='chapter'>
        <h2>3-2-8</h2>
        <SelectStyle mode='light' />
        <SelectStyle mode='dark' />
      </div>
    </React.Fragment>
  )
}