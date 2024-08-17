import React from 'react'
import {atom,selector,useRecoilState} from 'recoil'

// localStorage.setItem('score',0)
// const getDataScore=localStorage.getItem('score')
// console.log(getDataScore);
let dataplayer={
    player:'yotsusan machi',
    score:0,
    age:new Date().getFullYear() - 2002+' years old',
    websiteLink:'https://initer3737.github.io',
    instagram:'https://www.instagram.com/yotsusan_machi/',
    github:'https://github.com/initer3737',
    course:'https://training-ground-programmis.vercel.app/',
    websiteTitle:'check me out',
    addres:'hi no kuni konoha ga kure manguntur ken',
    aisatsu:"aku adalah yotsusan machi seorang neet yang akan menjadi front end developer dimasa yang akan datang desu"
}

const Data=atom({
    key:'score',
    default:dataplayer
})

const DataSelector=selector({
    key:'getScore',
    get:({get})=>{
            //fungsi get yang memanggil atom
        return get(Data)
    }
})

const multiply3=selector({
    key:'multiply213',
    get:({get})=>{
       return get(Data).score*3
    }
})
export{
    Data,
    DataSelector,
    multiply3
}