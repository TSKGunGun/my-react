import MaterialBasic from "./MaterialBasic"
import MaterialDrawer from "./MaterialDrawer"

export default function Chapter6Component() {
  return (
    <>
      <MaterialDrawer />
      <h1>Chapter 6</h1>
      <div className='chapter'>
        <h2>6-1-2</h2>
        <MaterialBasic />
      </div>
    </>
  )
}