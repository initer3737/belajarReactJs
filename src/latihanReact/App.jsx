import {
    IconBrandGithub,
    IconBrandNetflix,
    IconPlayerPlay,
    IconBrandInstagram,
    IconBrandWebflow
} from '@tabler/icons';
import React,{ useState} from 'react';
import {DataSelector} from '../game/stateRecoilGame/data'
import { useRecoilValue } from 'recoil';
import {
    Button,
    Img,
    Card,
    Iframe
} from  './assemble';
import chisato from '../assets/Chisato-nishikigi-1.webp'
// grid place-content-center flex align-center justify-center

// <<<<<<<<<<<<<<  ✨ Codeium Command 🌟 >>>>>>>>>>>>>>>>
            /**
             * A function that generates an array of JSX elements
             * Each element is a paragraph with the text "{index} ohayou gozaimasu"
             * Where index is the index of the element in the array
             * @returns {JSX.Element[]} An array of JSX elements
             */
            const Datass=()=>{
                const data=[]
                for (let index = 1; index <= 5; index++) {
                    data.push(<p key={index}>{index}. ohayou gozaimasu</p>);
                }
                return data;
            };
            
export default function App() {
    const dataProfile=useRecoilValue(DataSelector)
    const [listPopUp,setListPopUp]=useState(false)
           
    return (
        <div className='bg-slate-100 grid place-content-center min-h-screen py-3'>
                <div className='flex flex-col'>
                    <button 
                        className='bg-sky-600 hover:text-white hover:bg-sky-400 transition-all duration-500 px-5 py-2 rounded'
                        onClick={()=>{setListPopUp(prev=>!prev)}}
                        >
                        pop up
                    </button>
                    {listPopUp&& (
                        <ul className='flex flex-col bg-violet-600 px-5 py-4 duration-500 transition-all'>
                            <li>{Datass()}</li>
                        </ul>
                    )}
                </div>
          <div className="flex flex-col gap-3 align-center justify-center antialiased">
          <div className="max-w-md w-full">
                <Card footer='i love lycoris recoil'>
                    <Card.title>
                    <h1 className='text-2xl justify-center flex items-center'>
                        <IconPlayerPlay className='text-rose-800'/>
                        Lycoris Recoil
                    </h1>
                    </Card.title>
                    <Img src={chisato} alt="chisato one san"
                        className='px-1 py-3 rounded-[15px] shadow-lg shadow-blue-700/50' 
                    onClick={
                        ()=>window.open('https://www.independenmedia.id/various/2767966161/sinopsis-demon-slayer-kimetsu-no-yaiba-season-3-pembantaian-desa-penempa-pedang','_blank')
                    }/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ad magnam laudantium animi officiis voluptatibus sapiente sit, sunt modi eius quam? Pariatur similique illo et ullam, repellendus omnis doloremque nostrum?
                </Card>
            </div>
          <div className="max-w-md w-full">
                <Card>
                    <Card.title>
                    <h1 className='text-2xl justify-center flex items-center'>
                        <IconBrandNetflix className='text-rose-800'/>
                        kimetsu no yaiba trailer
                    </h1>
                    </Card.title>
                    <Iframe width="606" height="341" src="https://www.youtube.com/embed/PUeB0qbisq0" title="TVアニメ『リコリス・リコイル』エンディングテーマ解禁PV｜2022年7月放送" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                      className='p-2'
                    />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ad magnam laudantium animi officiis voluptatibus sapiente sit, sunt modi eius quam? Pariatur similique illo et ullam, repellendus omnis doloremque nostrum?
                    <Card.footer>
                     <h1 className='text-2xl justify-center flex items-center'>
                        <IconBrandNetflix className='text-rose-800'/>
                       kimetsu no yaiba trailer
                    </h1>
                    </Card.footer>
                </Card>
            </div>
          </div>
            <div className='flex gap-x-2 mt-3 justify-center flex-wrap md:gap-2 gap-3 md:flex-row flex-col'>
                <Button className='bg-sky-600 text-white border-double hover:border-2 border-sky-400'
                    onClick={()=>window.open(dataProfile.course,'_blank')}
                >
                    <IconBrandWebflow />
                    website
                </Button>
                <Button className='bg-sky-600 text-white border-double hover:border-2 border-sky-400'
                    onClick={() => window.open(dataProfile.instagram,'_blank')}>
                    <IconBrandInstagram />
                    instagram
                </Button>
                <Button
                    {...{ onClick: () =>window.open(dataProfile.github,'_blank') }}
                    className='bg-black text-white border-double hover:border-2 border-sky-400'
                >
                    <IconBrandGithub />
                    github
                </Button>
            </div>
        </div>
    );
}
