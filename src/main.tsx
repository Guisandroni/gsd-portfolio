import { createRoot } from "react-dom/client";
import { App } from "./App";
import { StrictMode } from "react";
import './main.styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
