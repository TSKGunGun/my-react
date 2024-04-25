import StateEffect from "./StateEffect"
import HookTimer from "./HookTimer"
import HookEffect from "./HookEffect"
import HookRefNg from "./HookRefNg"
import HookRefForward from "./HookRefForward"
import HookCallbackRef from "./HookCallbackRef"
import HookReducer from "./HookReducer"
import HookReducerUp from "./HookReducerUp"
import HookContext from "./HookContext"
import RecoilCounter from "./RecoilCounter"
import { RecoilRoot } from "recoil"
import RecoilTodo from "./RecoilTodo"
import HookMemo from "./HookMemo"
import HookTransition from "./HookTransisiton"
import HookDeferred from "./HookDeferred"
import HookDeferredTransition from "./HookDeferredTransisiton"
import HookCustom from "./HookCustom"

export default function Chapter7Component() {
  return (
    <>
      <h1>Chapter 7</h1>
      {/*
      <div className='chapter'>
        <h2>7-1-2</h2>
        <StateEffect init={0} />
      </div>
      <div className='chapter'>
        <h2>7-1-5</h2>
        <HookTimer init={10} />
      </div>
      <div className="chapter">
        <h2>7-1-7</h2>
        <HookEffect init={10} />
      </div>
       
      <div className="chapter">
        <h2>7-2-2</h2>
        <HookRefNg />
      </div>
      <div className="chapter">
        <h2>7-2-7</h2>
        <HookRefForward />
      </div>
      
      <div className="chapter">
       <h2>7-2-11</h2>
        <HookCallbackRef />
      </div>
      
      <div className="chapter">
        <h2>7-3-2</h2>
        <HookReducer init={0} />
      </div>
      

      <div className="chapter">
        <h2>7-3-4</h2>
        <HookReducerUp init={0} />
      </div>
 

      <div className="chapter">
        <h2>7-4-3</h2>
        <HookContext />
      </div>

      <div className="chapter">
        <h2>7-5-2</h2>
        <RecoilRoot>
          <RecoilCounter />
        </RecoilRoot>
      </div>
      <div className="chapter">
        <h2>7-5-6</h2>
        <RecoilRoot>
          <RecoilTodo />
        </RecoilRoot>
      </div>
      <div className="chapter">
        <h2>7-6-3</h2>
        <HookMemo />
      </div>
      <div className="chapter">
        <h2>7-7-3</h2>
        <HookTransition />
      </div>
      <div className="chapter">
        <h2>7-7-8</h2>
        <HookDeferred />
      </div>
      <div className="chapter">
        <h2>7-7-10</h2>
        <HookDeferredTransition />
      </div>
      */}
      <div className="chapter">
        <h2>7-8-2</h2>
        <HookCustom />
      </div>
    </>
  )
}