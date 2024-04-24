import LazyBasic from "./LazyBasic"
import LazyMulti from "./LazyMulti"
import SuspenseSimple from "./SupenseSimple"
import SuspenseResult from "./SuspenseResult"

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
    </>
  )
}