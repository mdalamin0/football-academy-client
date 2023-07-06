import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Route.jsx";
import AuthProvider from "./Provider/AuthProvider";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Provider } from "react-redux";
import store from "./Redux/store";

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className="max-w-7xl mx-auto">
          <RouterProvider router={router} />
        </div>
      </AuthProvider>
    </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
