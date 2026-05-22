import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

console.log("VisitChina.au: Initializing...");

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log("VisitChina.au: Application mounted.");
} else {
  console.error("VisitChina.au: Failed to find the root element.");
}
