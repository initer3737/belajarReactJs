import React from 'react'
import  {useRecoilValue} from'recoil'
import {DataSelector,multiply3} from './stateRecoilGame/data/index'
export default function ProfileGame() {
        const profile=useRecoilValue(DataSelector)
        const multiply=useRecoilValue(multiply3)
  return (
    <div className='flex flex-col h-screen justify-center'>
        <ul className='flex justify-center flex-col content-center mx-[20vw]'>
            <li>name : {profile.player} </li>
            <li>score : {profile.score} </li>
            <li>score multiply3 : {multiply} </li>
            <li><address>address : {profile.addres}</address> </li>
            <li>age : {profile.age} </li>
            <li>aisatsu : {profile.aisatsu} </li>
            <li>portofolio : 
                <a href={profile.websiteLink} target="_blank" className='text-blue-300 hover:text-blue-500 ease-in duration-150'> {profile.websiteTitle}</a> 
            </li>
            <li>blog : 
                <a href={profile.course} target="_blank" className='text-blue-300 hover:text-blue-500 ease-in duration-150'> blog</a> 
            </li>
            <li>wich one? : 
                <a href='https://www.imaginarycloud.com/blog/recoil-vs-redux/' target="_blank" className='text-blue-300 hover:text-blue-500 ease-in duration-150'> 
                    recoil vs redux
                </a> 
            </li>
        </ul>
    </div>
  )
}
