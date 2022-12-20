import React, { useCallback, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { getUser } from '../../api/user';
import { User } from '../../types/user';
import * as Style from './styles';

const Root = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState<User>();

    const fetchUser = useCallback(async () => {
        const { data } = await getUser();

        if (!data) {
            return navigate('/auth/signin');
        }
        setUser(data);
    }, [navigate]);

    useEffect(() => {
        fetchUser();
    }, [navigate, fetchUser]);

    return (
        <Style.Container>
            <Style.Card>
                {user ? (
                    <>
                        {Object.keys(user).map((k) => {
                            if (k === 'id') return null;
                            return (
                                <Style.Line key={k}>
                                    <Style.Legend>
                                        {`${k[0].toUpperCase()}${k.slice(1)}`}:
                                    </Style.Legend>
                                    <p>{user[k as keyof User]}</p>
                                </Style.Line>
                            );
                        })}
                        <Style.Button
                            onClick={() => {
                                localStorage.removeItem('accessToken');
                                navigate('/auth/signin');
                            }}>
                            Logout
                        </Style.Button>
                    </>
                ) : (
                    <Style.LoadingContainer>
                        <Style.Legend>Loading...</Style.Legend>
                    </Style.LoadingContainer>
                )}
            </Style.Card>
        </Style.Container>
    );
};

export default Root;
