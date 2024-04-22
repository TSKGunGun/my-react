import React from 'react';
import MyHello from './MyHello';
import EventBasic from './EventBasic';
import StateBasic from './StateBasic';
import books from './books';
import ForNest from './ForNest';
import SelectStyle from './SelectStyle';
import StyledPanel from './StyledPanel';
import TitledPanel from './TitledPanel';
import ListTemplate from './ListTemplate';
import StateParent from './StateParent';
import EventMouse from './EventMouse';
import EventCompare from './EventCompre';
import EventError from './EventError';

export default function Chapter3Component() {
  return (
    <>
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
      <div className='chapter'>
        <h2>3-3-1</h2>
        <StyledPanel>
          <p>メンバー募集中!</p>
          <p>ようこそ、1515会へ!!</p>
        </StyledPanel>
      </div>
      <div className='chapter'>
        <h2>3-3-4</h2>
        <TitledPanel>
          <p key="title">メンバー募集中</p>
          <p key="body">ようこそ、1515会へ!!</p>
        </TitledPanel>
      </div>
      <div className='chapter'>
        <ListTemplate src={books} render={ elem => (
            <>
              <dt>
                <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`} >
                  {elem.title} ({elem.price}円)
                </a>
              </dt>
              <dd>{elem.summary}</dd>  
            </>
          )}/>
      </div>
      <div className='chapter'>
        <StateParent />
      </div>
      <div className='chapter'>
        <h2>3-4-1</h2>
          <EventMouse 
            alt="ロゴ画像"
            beforeSrc="https://www.web-deli.com/image/linkbanner_l.gif"
            afterSrc="https://www.web-deli.com/image/home_chara.gif"
          />
      </div>
      <div className='chapter'>
          <h2>3-4-4</h2>
          <EventCompare />
      </div>
      <div className='chapter'>
          <h2>3-4-7</h2>
          <EventError src="./image/wings.jpg" alt="ロゴ画像" />
      </div>
    </>
  )
}