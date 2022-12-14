import React from 'react';
import * as Style from '../styles';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Field } from '../../../types/auth';

const fields: Field[] = [
    { id: 'username', label: 'Username', type: 'text' },
    { id: 'password', label: 'Password', type: 'password' },
    { id: 'name', label: 'Full name', type: 'text' },
    { id: 'group', label: 'Group', type: 'text' },
    { id: 'variant', label: 'Variant', type: 'text' },
    { id: 'phone', label: 'Phone number', type: 'text' },
];

const SignUp = () => {
    const { register, handleSubmit } = useForm();

    return (
        <Style.Form
            onSubmit={handleSubmit((data) => {
                console.log(data);
            })}>
            <Style.Header>
                <Style.Title>Sign up</Style.Title>
                <Style.Subtitle>
                    Already signed up?{' '}
                    <span>
                        <Link to="/auth/signin">Sign in</Link>
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
            <Style.SubmitButton type="submit" value="Sign up" />
        </Style.Form>
    );
};

export default SignUp;
