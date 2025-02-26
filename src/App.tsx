import { useGlobalContext } from "./contexts/GlobalContext";
import { routeTree } from './routeTree.gen'
import { RouterProvider, createRouter } from '@tanstack/react-router'

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {
    globalContext: undefined!,
  }
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function App() {
  const globalContext = useGlobalContext();

  return <RouterProvider router={router} context={{ globalContext }} />
}

export default App
