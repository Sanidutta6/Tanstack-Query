import { Outlet, useNavigate } from 'react-router'
import Loader from "../components/Loader"
import { useGlobalContext } from '../contexts/GlobalContext'
import { useEffect } from 'react';

const AuthLayout = () => {
    const { isLoggedIn } = useGlobalContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn()) {
            navigate("/");
        }
    }, [isLoggedIn])

    return (
        <main className='h-screen min-w-dvw flex items-center justify-center'>
            <Loader />
            <Outlet />
        </main>
    )
}

export default AuthLayout