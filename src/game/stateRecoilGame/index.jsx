import React,{useCallback,useMemo,useState} from 'react'
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
    const [score,setScore]=useState(0)
    const [score2,setScore2]=useState(0)
    const Analitics=()=>{
        for (let index = 0; index < 2000000000; index++) {
            
        }
        console.log("anime is good")
    }
    const getAnalitycs=useMemo(()=>Analitics(),[score])
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
                <div className="flex flex-col gap-3 justify-center">
                    <h2 className="test-3xl text-center">game desu score {score}</h2>
                    <h3 className="text-2xl"><hr />{getAnalitycs}</h3>
                    <button onClick={()=>{
                        setScore(prev=>prev+1)
                    }}>hit me kudasai</button>
                </div>
                <div className="flex flex-col gap-3 justify-center">
                    <h2 className="test-3xl text-center">game desu score2 {score2}</h2>
                    <h3 className="text-2xl"><hr /></h3>
                    <button onClick={()=>{
                        setScore2(prev=>prev+1)
                    }}>hit me kudasai2</button>
                </div>
    </div>
  )
}
