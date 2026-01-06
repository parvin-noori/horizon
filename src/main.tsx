import { HeroUIProvider } from "@heroui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import "./core/i18next.js";
import "./index.css";
import QueryProvider from "./providers/react-query-provider.tsx";
import { router } from "./router.tsx";
import { store } from "./store.js";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container not found");
}

createRoot(container).render(
  <QueryProvider>
    <Provider store={store}>
      <HeroUIProvider>
        <StrictMode>
          <RouterProvider router={router} />
        </StrictMode>
      </HeroUIProvider>
    </Provider>
  </QueryProvider>
);
