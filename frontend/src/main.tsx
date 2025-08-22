import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { TanstackQueryProvider } from "./integrations/tanstack-query.tsx";
import { TanstackRouterProvider } from "./integrations/tanstack-router.tsx";
import reportWebVitals from "./integrations/web-vitals.ts";
import "./main.css";

const rootElement = document.querySelector("#app");
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <TanstackQueryProvider>
        <TanstackRouterProvider />
      </TanstackQueryProvider>
    </StrictMode>,
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
