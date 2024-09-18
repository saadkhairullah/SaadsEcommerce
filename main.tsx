import React from 'react';
import ReactDOM from 'react-dom/client'; // Use `react-dom/client` for React 18+
import App from './App'; // Import your App component
import './style.css'; // Import global styles if you have any
// import 'bootstrap/dist/css/bootstrap.css';

// Get the root element where React will render your app
const rootElement = document.getElementById('root') as HTMLElement;

// Create a root using ReactDOM and render the App component
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);