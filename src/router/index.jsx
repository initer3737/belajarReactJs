import React from 'react';
import { Routes, Route,NavLink,useLocation } from 'react-router-dom';
import Users from '../users';
import UserShow from '../userShow';
import RecoilData from '../recoilShow';
import Counter from '../game/counter';
import App from '../latihanReact/App';
import ProfileGame from '../game/profile';
import TodoList from '../todolist/todoList';

export default function Router() {
    const {pathname}=useLocation()
    const pathUrl=pathname.replace('/','')
    return (
        <>
            <div className="flex gap-3 justify-center items-center bg-[#000]/80 text-[#fff] p-3 text-xl">
                <NavLink to={'/'} className={`${pathUrl === ''?'text-[red]':'text-[#fff]'} hover:text-rose-400`}>home</NavLink>
                <NavLink to={'/game'} className={`${pathUrl === 'game'?'text-[red]':'text-[#fff]'} hover:text-rose-400`}>game</NavLink>
                <NavLink to={'/game/profile'} className={`${pathUrl === 'game/profile'?'text-[red]':'text-[#fff]'} hover:text-rose-400`}>game profile</NavLink>
                <NavLink to={'/todos'} className={`${pathUrl === 'todos'?'text-[red]':'text-[#fff]'} hover:text-rose-400`}>todo List</NavLink>
                <NavLink to={'/user/1'} className={`${pathUrl.split('/')[0] === 'user'?'text-[red]':'text-[#fff]'} hover:text-rose-400`}>user 1</NavLink>
                <NavLink to={'/rekoil/1'} className={`${pathUrl.split('/')[0] === 'rekoil'?'text-[red]':'text-[#fff]'} hover:text-rose-400`}>rekoil 1</NavLink>
                <NavLink to={'/latihan'} className={`${pathUrl === 'latihan'?'text-[red]':'text-[#fff]'} hover:text-rose-400`}>latihan</NavLink>
            </div>
        <Routes>
            <Route path='/' element={<Users />} />
            <Route path='/user/:id' element={<UserShow />} />
            <Route path='/rekoil/:id' element={<RecoilData />} />
            <Route path='/latihan' element={<App />} />
            <Route path='/game' element={<Counter />} />
            <Route path='/game/profile' element={<ProfileGame />} />
            <Route path='/todos' element={<TodoList />} />
            <Route path='/*' element={<Users />} />
        </Routes>
        </>
    );
}
