import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { GlobalContextProvider } from '../contexts/GlobalContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// Create a client
const queryClient = new QueryClient();

export const Route = createRootRoute({
    component: () => (
        <>
            <GlobalContextProvider>
                <QueryClientProvider client={queryClient}>
                    <Outlet />
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </GlobalContextProvider>
            <TanStackRouterDevtools />
        </>
    ),
})