import { FieldValues } from 'react-hook-form';
import { NavigateFunction } from 'react-router-dom';
import { SignInForm, SignUpForm } from '../api/auth';

export type Field = {
    id: string;
    label: string;
    type: string;
    pattern?: RegExp;
};

export type Form = {
    title: string;
    subtitle: string;
    link: string;
    linkText: string;
    onSubmit: (
        setError: (err: string) => void,
        navigate: NavigateFunction
    ) => (data: FieldValues) => Promise<void>;
    fields: Field[];
};
