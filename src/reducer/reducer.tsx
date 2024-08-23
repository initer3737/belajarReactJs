import React,{useReducer} from 'react'
    const reducer=(state,action)=>{
        switch(action.type){
            case 'increment':
                return {count:state.count+1}
            case 'decrement':
                return {count:state.count-1}
            default:
                throw Error(`unknown action : ${action.type}`)
        }
    }
function Reducer() {
    const [state,dispatch]=useReducer(reducer,{count:0})
        const Add=()=>{dispatch({type:'increment'})}
        const Sub=()=>{dispatch({type:'decrement'})}
  return (
    <div className='flex flex-col justify-center items-center'>
        <p>{state.count}</p>
        <button onClick={Add}>Add</button>
        <button onClick={Sub}>sub</button>
    </div>
  )
}

export default Reducer