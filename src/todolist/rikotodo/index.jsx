import React from 'react'
import {atom,selector} from 'recoil';

const TodoReko=atom({
  key:'todolist',
  default:[]
})

const TodoInput=atom({
  key:'todolistInput',
  default:[]
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