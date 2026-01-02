import { HeroUIProvider } from "@heroui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import "./core/i18next.js";
import "./index.css";
import { router } from "./router.jsx";
import { store } from "./store.js";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <HeroUIProvider>
        <StrictMode>
          <RouterProvider router={router} />
        </StrictMode>
      </HeroUIProvider>
    </Provider>
  </QueryClientProvider>
);
