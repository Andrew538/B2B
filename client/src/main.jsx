import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import "./styles/main.scss";
import App from "./App.jsx";
import { authStore } from "./store/AuthStore.js";
import { Context } from './context.js';
import { NotificationProvider } from './components/Notification/NotificationContext.jsx';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Context.Provider value={{ store: authStore }}>
          <NotificationProvider>
            <App />
          </NotificationProvider>
        </Context.Provider>
      </BrowserRouter>
    </StrictMode>
  );
}
