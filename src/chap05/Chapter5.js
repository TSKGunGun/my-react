import LazyBasic from "./LazyBasic"
import LazyMulti from "./LazyMulti"
import SuspenseSimple from "./SupenseSimple"
import SuspenseResult from "./SuspenseResult"
import ProfilerBasic from "./ProfilerBasic"
import StyledBasic from "./StyledBasic"
import StyledCss from "./StyledCss"
import StyledDynamic from "./StyledDynamic"
import StyledComp from "./StyledComp"
import { MyButton, MyStyledButton } from "./StyledComp2"
import StyledCommon from "./StyledCommon"
import PortalBasic from "./PotalBasic"
import ErrorRoot from "./ErrorRoot"
import ErrorRetryRoot from "./ErrorRetryRoot"
import ErrorEventRoot from "./ErrorEventRoot"

export default function Chapter5Component() {
  return (
    <>
      <h1>Chapter 5</h1>
      <div className='chapter'>
        <h2>5-1-1</h2>
        <LazyBasic />
      </div>
      <div className="chapter">
        <h2>5-1-4</h2>
        <LazyMulti />
      </div>
      <div className="chapter">
        <h2>5-1-7</h2>
        <SuspenseSimple />
      </div>
      <div className="chapter">
        <h2>5-1-11</h2>
        <SuspenseResult />
      </div>
      {/*
      <div className="chapter">
        <h2>5-1-15</h2>
        <ProfilerBasic />
      </div>
       */}
      <div className="chapter">
        <h2>5-2-5</h2>
        <StyledBasic />
      </div>

      <div className="chapter">
        <h2>5-2-7</h2>
        <StyledCss />
      </div>
      <div className="chapter">
        <h2>5-2-9</h2>
        <StyledDynamic theme={{color: 'darkgray', radius: true}} />
      </div>
      <div className="chapter">
        <h2>5-2-11</h2>
        <StyledComp />
      </div>
      <div className="chapter">
        <h2>5-2-16</h2>
        <MyButton>MyButton</MyButton>
        <MyStyledButton>MyStyledButton</MyStyledButton>
      </div>
      <div className="chapter">
        <h2>5-2-19</h2>
        <StyledCommon />       
      </div>
      <div className="chapter">
        <h2>5-3-3</h2>
        <div id="dialog"></div>
        <PortalBasic />
      </div>
      <div className="chapter">
        <h2>5-3-6</h2>
        <ErrorRoot />
      </div>
      <div className="chapter">
        <h2>5-3-9</h2>
        <ErrorRetryRoot />
      </div>
      <div className="chapter">
        <h2>5-3-14</h2>
        <ErrorEventRoot />
      </div>
    </>
  )
}