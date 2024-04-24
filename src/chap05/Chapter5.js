import LazyBasic from "./LazyBasic"
import LazyMulti from "./LazyMulti"

export default function Chapter5Component() {
  return (
    <>
      <h1>Chapter 5</h1>
      <div className='chapter'>
        <h2>5-1-1</h2>
        <LazyBasic />
      </div>
      <div className="chapter">
        <h2>5-1-2</h2>
        <LazyMulti />
      </div>
    </>
  )
}