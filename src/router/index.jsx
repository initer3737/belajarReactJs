import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Users from '../users';
import UserShow from '../userShow';
import RecoilData from '../recoilShow';
import Counter from '../game/counter';
import App from '../latihanReact/App';
import ProfileGame from '../game/profile';
import TodoList from '../todolist/todoList';

export default function Router() {
    return (
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
    );
}
