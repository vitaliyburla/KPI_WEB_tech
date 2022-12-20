import { signIn, SignInForm, signUp, SignUpForm } from '../../api/auth';
import { Form } from '../../types/auth';

export const signInForm: Form = {
    title: 'Sign in',
    subtitle: "Don't have an account? ",
    link: '/auth/signup',
    linkText: 'Sign up',
    fields: [
        {
            id: 'username',
            label: 'Username',
            type: 'text',
            pattern: /^\S+$/,
        },
        {
            id: 'password',
            label: 'Password',
            type: 'password',
            pattern: /^\S+$/,
        },
    ],
    onSubmit(setError, navigate) {
        return async (data) => {
            setError('');
            const res = await signIn(data as SignInForm);
            if (res.error) {
                return setError(res.error);
            }
            const { accessToken } = res.data;
            localStorage.setItem('accessToken', accessToken);
            navigate('/');
        };
    },
};

export const signUpForm: Form = {
    title: 'Sign up',
    subtitle: 'Already signed up? ',
    link: '/auth/signin',
    linkText: 'Sign in',
    fields: [
        ...signInForm.fields,
        {
            id: 'name',
            label: 'Full name e.g. Bob Smith',
            type: 'text',
            pattern: /^[A-Za-z]*\s[A-Za-z]*$/,
        },
        {
            id: 'group',
            label: 'Group e.g. AB-12',
            type: 'text',
            pattern: /^[A-Za-z]{2}-\d{2}$/,
        },
        {
            id: 'variant',
            label: 'Variant e.g. 12',
            type: 'text',
            pattern: /^\d{1,2}$/,
        },
        {
            id: 'phone',
            label: 'Phone e.g. 123-123-12-12',
            type: 'text',
            pattern: /^\d{3}-\d{3}-\d{2}-\d{2}$/,
        },
    ],
    onSubmit(setError, navigate) {
        return async (data) => {
            setError('');
            const res = await signUp(data as SignUpForm);
            if (res.error) {
                return setError(res.error);
            }
            navigate('/auth/signin');
        };
    },
};
