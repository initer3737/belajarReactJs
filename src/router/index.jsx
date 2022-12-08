import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Users from '../users';
import UserShow from '../userShow';
import RecoilData from '../recoilShow';
import App from '../latihanReact/App';

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Users />} />
            <Route path='/user/:id' element={<UserShow />} />
            <Route path='/rekoil/:id' element={<RecoilData />} />
            <Route path='/latihan' element={<App />} />
        </Routes>
    );
}
