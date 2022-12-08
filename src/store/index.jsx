import axios from 'axios';
import { selector } from 'recoil';
import { useParams } from 'react-router-dom';

const authUser = selector({
    key: 'auth-user',
    get: async () => {
        let user = [];

        try {
            const { id } = useParams();
            let { data } = await axios.get(
                `https://jsonplaceholder.typicode.com/users/${id}`
            );
            user = { user: data };
        } catch (e) {
            user = { user: e.message };
        }

        return user;
    },
});

export { authUser };
