import React,{useRef,useEffect,memo,useState} from 'react'

function Ref() {
    const count=useRef(0)
    const [count2,setCount2] =useState(0)
        useEffect(()=>{
            count.current=count.current+1
            // setCount2(count2+1)
        },[count])

        const inputElement = useRef();
// <<<<<<<<<<<<<<  ✨ Codeium Command ⭐  >>>>>>>>>>>>>>>>
//         /**
//          * Focuses the inputElement
//          */
// <<<<<<<  eed3fda0-bac0-4eca-b75d-d06916e1bbe6  >>>>>>>
        const focusInput = () => {
          inputElement.current.focus();
        };
  return (
    <div className='text-3xl flex flex-col gap-3 justify-center items-center'>
        <p>ref tidak menyebabkan re render</p>
        <p>Ref = {count.current}</p>
        <p>useState = {count2}</p>
        <button onClick={()=>count.current=count.current+1}>ref</button>
        <button onClick={()=>setCount2(count2+1)}>state</button>

        <input type="text" ref={inputElement} />
        <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default memo(Ref)