import { useReducer } from "react";
import { Button } from "@mui/material";

export default function HookReducerUp( { init }) {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'update':
          return { count: state.count + action.step };
        case 'reset':
          return { count: action.init }
        default:
          return state;
      }
    },
    {
      count: init
    }
  );

  const handleUp = () => dispatch({ type: 'update', step: 1});
  const handleDown = () => dispatch({ type: 'update', step: -1});
  const handleReset = () => dispatch({ type: 'reset', init: 0 });

  return(
    <>
      <Button onClick={handleUp} variant="contained" color="primary">Up</Button>
      <Button onClick={handleDown} variant="contained" color="primary">Down</Button>
      <Button onClick={handleReset} variant="contained" color="primary">Reset</Button>
      <p>{ state.count }回クリックされました</p>
    </>
  );
}