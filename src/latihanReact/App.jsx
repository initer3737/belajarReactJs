import {
    IconBrandFacebook,
    IconBrandGithub,
    IconBrandTwitter,
    IconBrandNetflix,
    IconPlayerPlay
} from '@tabler/icons';
import React from 'react';
import {
    Button,
    Img,
    Card,
    Iframe
} from  './assemble';
import chisana from '../assets/chisana.webp'
// grid place-content-center flex align-center justify-center

export default function App() {
    return (
        <div className='bg-slate-100 grid place-content-center min-h-screen py-3'>
          <div className="flex flex-col gap-3 align-center justify-center antialiased">
          <div className="max-w-md w-full">
                <Card footer='i love lycoris recoil'>
                    <Card.title>
                    <h1 className='text-2xl justify-center flex items-center'>
                        <IconPlayerPlay className='text-rose-800'/>
                        Lycoris Recoil
                    </h1>
                    </Card.title>
                    <Img src={chisana} alt="chisana one san"
                        className='px-1 py-3 rounded' 
                    onClick={
                        ()=>window.open('https://anitrendz.net/news/2022/06/12/new-lycoris-recoil-trailer-reveals-july-2-premiere-ending-song-and-more/','_blank')
                    }/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ad magnam laudantium animi officiis voluptatibus sapiente sit, sunt modi eius quam? Pariatur similique illo et ullam, repellendus omnis doloremque nostrum?
                </Card>
            </div>
          <div className="max-w-md w-full">
                <Card>
                    <Card.title>
                    <h1 className='text-2xl justify-center flex items-center'>
                        <IconBrandNetflix className='text-rose-800'/>
                        Lycoris Recoil trailer
                    </h1>
                    </Card.title>
                    <Iframe width="606" height="341" src="https://www.youtube.com/embed/7AqlvbzBQG4" title="TVアニメ『リコリス・リコイル』エンディングテーマ解禁PV｜2022年7月放送" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                      className='p-2'
                    />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ad magnam laudantium animi officiis voluptatibus sapiente sit, sunt modi eius quam? Pariatur similique illo et ullam, repellendus omnis doloremque nostrum?
                    <Card.footer>
                     <h1 className='text-2xl justify-center flex items-center'>
                        <IconBrandNetflix className='text-rose-800'/>
                        Lycoris Recoil trailer
                    </h1>
                    </Card.footer>
                </Card>
            </div>
          </div>
            <div className='flex gap-x-2 mt-3'>
                <Button className='bg-sky-600 text-white'>
                    <IconBrandTwitter />
                    login
                </Button>
                <Button onClick={() => console.log('facebook')}>
                    <IconBrandFacebook />
                    login
                </Button>
                <Button
                    {...{ onClick: () => console.log('github') }}
                    className='bg-black text-white'
                >
                    <IconBrandGithub />
                    login
                </Button>
            </div>
        </div>
    );
}
