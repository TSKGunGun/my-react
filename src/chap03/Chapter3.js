import React from 'react';
import MyHello from './MyHello';
import EventBasic from './EventBasic';

export default function Chapter3Component() {
  return (
    <React.Fragment>
      <h1>Chapter 3</h1>
      <div>
        <h2>3-1-2</h2>
        <MyHello myName="鈴木"/>
      </div>
      <div>
        <h2>3-1-3</h2>
        <h3>Type=Date</h3>
        <EventBasic type="date" />
        <h3>Type=Time</h3>
        <EventBasic type="time" />
        <h3>Default</h3>
        <EventBasic />
      </div>
    </React.Fragment>
  )
}