import StateEffect from "./StateEffect"
import HookTimer from "./HookTimer"
import HookEffect from "./HookEffect"

export default function Chapter7Component() {
  return (
    <>
      <h1>Chapter 7</h1>
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
    </>
  )
}