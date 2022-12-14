import axios from 'axios';

const baseURL = 'http://localhost:3001';

export type SignInForm = {
    username: string;
    password: string;
};

type AxiosResponse = {
    data?: any;
    error?: string;
};

export const signIn = async (data: SignInForm): Promise<AxiosResponse> => {
    try {
        const response = await axios.post(`${baseURL}/auth/signin`, data);
        return { data: response.data };
    } catch (err) {
        if (axios.isAxiosError(err)) {
            const { error } = err?.response?.data;
            return { error };
        }
        return { error: 'Something went wrong, please try again' };
    }
};
