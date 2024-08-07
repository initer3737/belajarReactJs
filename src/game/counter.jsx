import React from 'react'
import GameState from './stateRecoilGame'
export default function Counter() {
  return (
    <div>
        <GameState/>
        <ul className='flex flex-col text-center mb-52'>
            <li className='text-2xl'>recoil</li>
            <li>atom :digunakan untuk menyimpan data seperti data dari api atau yang lainnya</li>
            <li>selector :menampung data dari dan hanya bisa dibaca saja [to get data and manipulate data from atom] </li>
            <li>useRecoilValue :digunakkan untuk membaca data dari selector </li>
            <li>useRecoilState :digunakkan untuk menyimpan data yang ada di atom [sama seperti usestate di react]</li>
            <li>const data = atom({`{key:'unique value',default:'0'}`})</li>
            <li>contoh let [data,setData] =useRecoilState(data)</li>
            <div className='bg-blue-400 p-1'/>
            <li className='text-2xl'>life cycle</li>
            <li>sama seperti manusia react juga punya siklus hidup</li>
            <li>seperti saat kita lahir , mempelajari sesuatu[update informasi] , dan kematian</li>
            <li>di dalam react lifecylce ada 3</li>
            <li>mounting , updating , dan unmounting</li>
            <li>mounting : saat komponen di render</li>
            <li>updating : saat komponen merender ulang karena ada perubahan data di state</li>
            <li>
              unmounting : saat komponen dihapus dari dom contohnya ketika user hendak pindah halaman yang mana halaman sebelumnya ada sebuah musik yang dijalankan secara otomatis oleh developer maka seharusnya musik itu berhenti ketika user hendak berpindah halaman
              jika developer tidak mengimplementasikan unmounting pada aplikasinya justru musik yang diputar secara otomatis akan terus dimainkan ketika user pindah halaman [pengalaman pribadi]
            </li>
            <li>
              <a 
                href="https://medium.com/codeacademia/apa-itu-component-lifecycle-di-react-bfcb64f64e0e"
                target={'_blank'}
                className='text-blue-300 hover:text-blue-500 text-2xl'
            >
                info-info
            </a>
            </li>
        </ul>
    </div>
  )
}
