import { useEffect } from 'react';
import Loader from "../components/Loader"
import { Outlet, useNavigate } from 'react-router'
import { useGlobalContext } from '../contexts/GlobalContext';
import Header from '../components/Header';

const RootLayout = () => {
    const { isLoggedIn } = useGlobalContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn()) {
            navigate("/login");
        }
    }, [isLoggedIn]);

    return (
        <main className='h-screen min-w-screen'>
            <Loader />
            <Header />
            <Outlet />
        </main>
    )
}

export default RootLayout