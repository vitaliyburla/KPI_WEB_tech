import { createBrowserRouter } from 'react-router-dom';
import Auth from '../pages/Auth';
import Root from '../pages/Root';
import SignUp from '../pages/Auth/SignUp';
import SignIn from '../pages/Auth/SignIn';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
    },
    {
        path: '/auth',
        element: <Auth />,
        children: [
            {
                path: 'signup',
                element: <SignUp />,
            },
            {
                path: 'signin',
                element: <SignIn />,
            },
        ],
    },
]);

export default router;
