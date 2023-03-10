import React, {useReducer} from 'react'

export default function Reducer() {
    const initialState = {count:0, name:'승희'}
    function reducer(state, action) {
      switch(action.type) {
        case 'reset' :
          return initialState;
        case 'increment' :
          return {count : state.count + 1, name: '내진'};
        case 'decrement' :
          return {count : state.count - 1, name: '우현'};
        default :
          throw new Error();
      }
    }
    const [state, dispatch] = useReducer(reducer,initialState);
  return (
    <div>
        Count(Reducer): {state.count}
        <br />
        Name(Reducer): {state.name}
        <br />
        <button onClick={()=> dispatch({type: 'reset'})}>Reset</button>
        <button onClick={()=> dispatch({type: 'decrement'})}>-</button>
        <button onClick={()=> dispatch({type: 'increment'})}>+</button>
    </div>
  )
}
