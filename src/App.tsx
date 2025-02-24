import { createBrowserRouter, RouterProvider } from "react-router"
import AuthLayout from "./layouts/AuthLayout"
import RootLayout from "./layouts/RootLayout"
import Login from "./pages/Login"
import Home from "./pages/Home"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { GlobalContextProvider } from "./contexts/GlobalContext"
import ViewProduct from "./pages/ViewProduct"


// Create a client
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/product/:id",
        element: <ViewProduct />
      },
    ]
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />
      },
    ]
  }
]);

function App() {
  return (
    <GlobalContextProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </GlobalContextProvider>
  )
}

export default App
