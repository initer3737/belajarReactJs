import React,{useEffect} from 'react'
import {atom,selector} from 'recoil';

const todoList=[
  'makan makanan sehat',
  'makan mi ayam',
  'minum yakult tiap hari biar usus smile terus',
]

const TodoReko=atom({
  key:'todolist',
  default:todoList
})

const TodoInput=atom({
  key:'todolistInput',
  default:''
})

const TodoWarning=atom({
  key:'todolistWarning',
  default:false
})

const GetTodoReko=selector({
  key:'todolistselector',
  get:({get})=>{
    return get(TodoReko);
  }
})

export{
  TodoReko,
  GetTodoReko,
  TodoWarning,
  TodoInput
}