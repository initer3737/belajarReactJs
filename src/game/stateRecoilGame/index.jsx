import React,{useMemo,useState} from 'react'
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
    const Analitics=(numb)=>{
        for (let index = 0; index < 1000000000; index++) {}
        // setScore(prev=>prev+numb)
         console.log("anime is good")
        //  return setScore(prev=>prev+numb)
        return score*numb
    }
    const Increment=()=>{
        return setScore(prev=>prev+1)
    }
    const getAnalitycsX3=useMemo(()=>{
        return Analitics(3)
    },[score])
  return (
    <div className='flex flex-col justify-center align-items-center h-screen'>
        <p className='text-center text-2xl'>{
            useConvertScoreToStatus(getScore.score)
        }</p>
        <p className='text-center text-2xl'>atom : {scoreGame.score}</p>
        <p className='text-center text-2xl'>selector : {getScore.score}</p>
        <button className='bg-sky-600 hover:text-white hover:bg-sky-400 transition-all duration-500 px-5 py-2 rounded-sm'
                                  //replace the old data but overide this one
            onClick={()=>setScoreGame({...scoreGame, score:scoreGame.score+1} ) }
        >hit me!</button>
                <div className="flex flex-col gap-3 justify-center">
                    <h2 className="test-3xl text-center">game desu score {score}</h2>
                    <h3 className="text-2xl text-center">get 3X analitics : {getAnalitycsX3} </h3>
                    <button className='bg-rose-800 hover:bg-rose-600 hover:text-rose-300 text-rose-700  transition-all duration-500 px-5 py-2 rounded-sm'
                    onClick={()=>{
                        Increment()
                        // Analitics(3)
                        // getAnalitycsX3()
                    }}>hit me kudasai</button>
                </div>
                <div className="flex flex-col gap-3 justify-center">
                    <h2 className="test-3xl text-center">game desu score2 {score2}</h2>
                    <h3 className="text-2xl"><hr /></h3>
                    <button className='bg-indigo-700 hover:bg-indigo-600 hover:text-white  transition-all duration-500 px-5 py-2 rounded-sm'
                    onClick={()=>{
                        setScore2(prev=>prev+1)
                    }}>hit me kudasai2</button>
                </div>
    </div>
  )
}
