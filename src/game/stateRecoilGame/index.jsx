import React from 'react'
import { useRecoilState,useRecoilValue } from 'recoil'
import { Data,DataSelector } from './data'
    const useConvertScoreToStatus=(score)=>{
        let status;
        if(score > 0)status='relax'
        if(score > 10)status='sangat relax'
        if(score > 40)status='lambat'
        if(score > 70)status='sangat lambat'
        if(score > 190)status='apaan sih lambat amat!'
        if(score > 990)status='dih lemot amat!'
        return status;
    }
export default function GameState() {
    const [scoreGame,setScoreGame]=useRecoilState(Data)
    const getScore=useRecoilValue(DataSelector)
  return (
    <div className='flex flex-col justify-center align-items-center h-screen'>
        <p className='text-center text-2xl'>{
            useConvertScoreToStatus(getScore.score)
        }</p>
        <p className='text-center text-2xl'>atom : {scoreGame.score}</p>
        <p className='text-center text-2xl'>selector : {getScore.score}</p>
        <button className='bg-sky-600 px-5 py-2 rounded-sm'
                                  //replace the old data but overide this one
            onClick={()=>setScoreGame({...scoreGame, score:scoreGame.score+1} ) }
        >hit me!</button>
    </div>
  )
}
