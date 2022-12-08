import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Users(props) {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        try {
            let response = await axios.get(
                'https://jsonplaceholder.typicode.com/users'
            );
            setUsers(response.data);
        } catch (error) {
            console.log(error.message);
        }
    };
    useEffect(() => {
        getUsers();
    }, []);
    return (
        <div className="flex justify-center py-4 px-2">
            <div>
                <h1 className={'text-xl'}>get all user</h1>
                {users.map(({ name, id, username, website }, index) => (
                    <ul key={index} className='mt-3'>
                        <li>id person {id}</li>
                        <li>name {name}</li>
                        <li>username {username}</li>
                        <li>
                            website{' '}
                            <a href={`https://${website}`} target='_blank' className='text-sky-400 hover:text-sky-800'>
                                {website}
                            </a>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    );
}
