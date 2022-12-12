import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import { AppProvider } from "./context/AppContext";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <App />
        <Toaster position="top-right" />
      </AppProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
