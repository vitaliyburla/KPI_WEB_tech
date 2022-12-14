import React, { useState } from 'react';
import * as Style from '../styles';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Field } from '../../../types/auth';
import { signIn, SignInForm } from '../../../api/auth';

const fields: Field[] = [
    { id: 'username', label: 'Username', type: 'text' },
    { id: 'password', label: 'Password', type: 'password' },
];

const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    return (
        <Style.Form
            onSubmit={handleSubmit(async (data) => {
                setError('');
                const res = await signIn(data as SignInForm);
                if (res.error) {
                    return setError(res.error);
                }
                const { accessToken } = res.data;
                localStorage.setItem('accessToken', accessToken);
                navigate('/');
            })}>
            <Style.Header>
                <Style.Title>Sign in</Style.Title>
                <Style.Subtitle>
                    Don't have an account?{' '}
                    <span>
                        <Link to="/auth/signup">Sign up</Link>
                    </span>
                </Style.Subtitle>
            </Style.Header>

            {fields.map((f) => (
                <Style.Input
                    key={f.id}
                    {...register(f.id)}
                    placeholder={f.label}
                    type={f.type}
                    required
                />
            ))}
            <Style.SubmitButton type="submit" value="Sign in" />
            {error && <Style.Error>{error}</Style.Error>}
        </Style.Form>
    );
};

export default SignUp;
