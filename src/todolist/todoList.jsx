import { useRecoilState } from 'recoil'
import {TodoReko,TodoWarning,TodoInput} from './rikotodo'
import React from 'react'
import Button from '../latihanReact/button'
import './todolist.css'
export default function TodoList() {
   const [list,setList]=useRecoilState(TodoReko)
   const [listInput,setListInput]=useRecoilState(TodoInput)
   const [warning,setWarning]=useRecoilState(TodoWarning)
    const OnChange=(e)=>{
         setListInput(e.target.value)
    }

    const OnClick=()=>{
        if(listInput.length > 6){
            //setList([...data lama yang berada di state list , overide nilai baru yang ada di inputan user])
            setList([...list,listInput])
            setListInput('')
        }else{
                setWarning(true);
            setTimeout(()=>{
                setWarning(false);
            },5000)
        }
    }

    const Delete=(value)=>{
            // list.map((val,index)=>{
                setList(list.splice(value,1))
            // })
        //filter hanya membutuhkan nilai false saja agar nilai array bisa dihilangkan
    }

    const Update=(valueUpdate,valueState)=>{
        
        //filter hanya membutuhkan nilai false saja agar nilai array bisa dihilangkan
    }

  return (
    <div>
        <div className="flex flex-col justify-center items-center h-screen gap-3">
        {/* <div className="lingkaran"></div> */}
            <p className={`text-5xl text-rose-400 ${warning?'block':'hidden'}`}>
                minimal lebih dari 6 karakter !! 
            </p>
            <input 
            type="text" 
            id='todo' 
            onChange={OnChange} 
            placeholder={'add todo'}
            value={listInput}
            />
            <Button 
            onClick={OnClick}
            >add
            </Button>
        </div>
        <ul className='flex flex-col justify-center items-center h-screen'>
            <li className='text-4xl'>todo list coy</li>
            {list.map((val,index)=>(
                <li key={index} className='text-xl text-blue-600 flex flex-row gap-3 py-3 text-right'>
                    {`${index+1} : ${val}`} 
                <Button
                    onClick={()=>Delete(val)}
                >delete</Button>
                {/* <Button
                //  onClick={Update}
                >update</Button> */}
                </li>
            ))}
        </ul>
    </div>
  )
}
