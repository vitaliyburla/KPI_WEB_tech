import { createBrowserRouter } from 'react-router-dom';
import Auth from '../pages/Auth';
import Root from '../pages/Root';
import Sign from '../pages/Auth/Form';
import { signInForm, signUpForm } from '../pages/Auth/forms';

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
                element: <Sign form={signUpForm} />,
            },
            {
                path: 'signin',
                element: <Sign form={signInForm} />,
            },
        ],
    },
]);

export default router;
