import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import "./index.css"

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { useGlobalContext } from './contexts/GlobalContext'

// Create a new router instance
const router = createRouter({
  routeTree,
  // context: {
  //   isLoggedIn: () => {
  //     const { isLoggedIn } = useGlobalContext(); // Get authentication state
  //     return { isLoggedIn };
  //   }
  // }
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  const GlobalContext = useGlobalContext();
  root.render(
    <StrictMode>
      <RouterProvider router={router} context={{ globalContext: GlobalContext }} />
    </StrictMode>,
  )
}