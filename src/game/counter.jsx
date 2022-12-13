import React from 'react'
import GameState from './stateRecoilGame'
export default function Counter() {
  return (
    <div>
        <GameState/>
        <ul className='flex flex-col text-center mb-52'>
            <li>selector :menampung data dan hanya bisa dibaca saja</li>
            <li>atom :sama seperti selector tapi di atom bisa get dan set data </li>
            <li>useRecoilValue :digunakkan untuk membaca data dari selector </li>
            <li>useRecoilState :digunakkan untuk menyimpan data yang ada di atom </li>
            <li>const data = atom({`key:'unique value',default:'0'`})</li>
            <li>contoh let [data,setData] =useRecoilState(data)</li>
        </ul>
    </div>
  )
}
