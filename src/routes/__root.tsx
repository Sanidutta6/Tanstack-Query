import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { useGlobalContext } from '../contexts/GlobalContext'

interface RootRouterContext {
    globalContext: ReturnType<typeof useGlobalContext>
}

export const Route = createRootRouteWithContext<RootRouterContext>()({
    component: () => (
        <>
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
})