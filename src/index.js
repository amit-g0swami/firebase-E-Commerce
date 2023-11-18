import "react-toastify/dist/ReactToastify.css";
import "./styles.css";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import App from "./App";
import store from "./redux/store";
import ErrorBoundary from "./templates/error-boundary/ErrorBoundary";
import { ThemeProvider } from "./theme";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
  },
});

root.render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider>
              <App />
            </ThemeProvider>
            <ReactQueryDevtools />
          </QueryClientProvider>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={true}
            theme="dark"
          />
        </Provider>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
);
