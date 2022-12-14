import React from 'react';
import * as Style from './styles';
import { Outlet } from 'react-router-dom';

const Auth = () => {
    return (
        <Style.Container>
            <Outlet />
        </Style.Container>
    );
};

export default Auth;
