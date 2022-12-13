import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function UserShow(props) {
    //const {user} =useRecoilValue(authUser)
    const { id } = useParams();
    const [user, setUser] = useState([]);
    const getUser = async () => {
        try {
            let response = await axios.get(
                `https://jsonplaceholder.typicode.com/users/${id}`
            );
            setUser(response.data);
        } catch (error) {
            console.log(error.message);
        }
        //user
    };
    useEffect(() => {
        getUser();
    }, [id]);
    return (
        <div className='flex flex-col justify-center'>
            <h1>get all user</h1>
            <ul>
                <li>{user.id}</li>
                <li>name {user.name}</li>
                <li>username {user.username}</li>
                <li>
                    website{' '}
                    <a href={`https://${user.website}`} target='_blank'>
                        {user.website}
                    </a>
                </li>
            </ul>
        </div>
    );
}
