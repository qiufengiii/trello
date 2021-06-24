import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DndProvider } from "react-dnd";
import reportWebVitals from "./reportWebVitals";
import { HTML5Backend as Backend } from "react-dnd-html5-backend";
import { AppStateProvider } from "./AppStateContext";

ReactDOM.render(
  <DndProvider backend={Backend}>
    <React.StrictMode>
      <AppStateProvider>
        <App />
      </AppStateProvider>
    </React.StrictMode>
  </DndProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
