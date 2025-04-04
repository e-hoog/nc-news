import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/User.jsx";
import { TopicsProvider } from "./contexts/Topics.jsx";
createRoot(document.getElementById("root")).render(
  <TopicsProvider>
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </TopicsProvider>
);
