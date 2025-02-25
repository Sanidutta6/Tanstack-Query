import { createFileRoute, Outlet, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react';
import { useGlobalContext } from '../../contexts/GlobalContext';

export const Route = createFileRoute('/(auth)/_auth')({
  component: AuthLayout,
})

function AuthLayout() {
  const { isLoggedIn } = useGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn()) {
      navigate({ to: "/" });
    }
  }, [isLoggedIn])

  return (
    <main className='h-screen min-w-dvw flex items-center justify-center'>
      <Outlet />
    </main>
  )
}