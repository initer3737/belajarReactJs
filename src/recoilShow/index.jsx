import React from 'react';
import { useRecoilValue } from 'recoil';
import { authUser } from '../store';

export default function RecoilData() {
    const { user } = useRecoilValue(authUser);
    const { name, username, id, website } = user;
    return (
        <div className={`flex flex-col justify-center items-center h-screen ${user ??'hidden'}`}>
            <div>person_id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>website: {website}</div>
        </div>
    );
}
