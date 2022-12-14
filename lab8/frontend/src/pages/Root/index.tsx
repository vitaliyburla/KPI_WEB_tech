import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { getUser } from '../../api/user';

const Root = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('accessToken');

        if (!token) {
            navigate('/auth/signin');
        }

        getUser();
    }, [navigate]);

    return <div>Root</div>;
};

export default Root;
