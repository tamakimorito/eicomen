import React from 'https://esm.sh/react@^19.1.0';
import ReactDOM from 'https://esm.sh/react-dom@^19.1.0/client';
import App from './App.tsx';
import { AppContextProvider } from './context/AppContext.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);