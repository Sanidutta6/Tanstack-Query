import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"

// Import the generated route tree
import { GlobalContextProvider } from './contexts/GlobalContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import App from './App'

// Create a client
const queryClient = new QueryClient();

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <GlobalContextProvider>
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </GlobalContextProvider>
    </StrictMode>,
  )
}