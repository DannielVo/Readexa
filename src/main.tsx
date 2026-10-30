import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import ToastContainer from "./components/common/ToastContainer.tsx";
import { ToastProvider } from "./context/ToastContext.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ToastProvider>
      <App />
      <ToastContainer />
    </ToastProvider>
  </BrowserRouter>,
);
