import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001',
});

export const getUser = async () => {
    try {
        const response = await instance.get('/user', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        });
        return { data: response.data };
    } catch (err) {
        if (axios.isAxiosError(err)) {
            const { error } = err?.response?.data;
            if (err.response?.status === 401) {
                localStorage.removeItem('accessToken');
            }
            return { error: error };
        }
        return { error: 'Something went wrong, please try again' };
    }
};
