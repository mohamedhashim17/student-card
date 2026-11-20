
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

import "./index.css";
import "./App.css";

// Component styles
import "./styles/Header.css";
import "./styles/Sidebar.css";
import "./styles/StatCard.css";
import "./styles/StudentCard.css";
import "./styles/StudentList.css";
import "./styles/StudentForm.css";
import "./styles/Dashboard.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
