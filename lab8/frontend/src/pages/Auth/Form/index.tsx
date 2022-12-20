import React, { useState } from 'react';
import * as Style from '../styles';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Form } from '../../../types/auth';

type Props = {
    form: Form;
};

const SignForm = ({ form }: Props) => {
    const { title, subtitle, link, linkText, onSubmit, fields } = form;
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    return (
        <Style.Form onSubmit={handleSubmit(onSubmit(setError, navigate))}>
            <Style.Header>
                <Style.Title>{title}</Style.Title>
                <Style.Subtitle>
                    {subtitle}
                    <span>
                        <Link to={link}>{linkText}</Link>
                    </span>
                </Style.Subtitle>
            </Style.Header>

            {fields.map((f) => (
                <Style.Input
                    key={f.id}
                    {...register(f.id)}
                    placeholder={f.label}
                    {...(f.pattern
                        ? { pattern: f.pattern.toString().replaceAll('/', '') }
                        : {})}
                    type={f.type}
                    required
                />
            ))}
            <Style.SubmitButton type="submit" value={title} />
            {error && <Style.Error>{error}</Style.Error>}
        </Style.Form>
    );
};

export default SignForm;
