import { createFileRoute, Outlet, useNavigate } from '@tanstack/react-router'
import Header from '../../components/Header';
import { useEffect } from 'react';
import { useGlobalContext } from '../../contexts/GlobalContext';

export const Route = createFileRoute('/(app)/_app')({
  component: AppLayout,
})

function AppLayout() {
  const { isLoggedIn } = useGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate({ to: "/login" });
    }
  }, [isLoggedIn]);

  return (
    <main className='h-screen min-w-screen'>
      <Header />
      <Outlet />
    </main>
  )
}
