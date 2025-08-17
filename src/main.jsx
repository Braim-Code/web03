import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./state/store.js";
import { HashRouter } from "react-router-dom"; // ✅ import this

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter> {/* ✅ Wrap App in HashRouter */}
        <App />
      </HashRouter>
    </Provider>
  </StrictMode>
);
