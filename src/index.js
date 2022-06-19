import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.scss';
import App from './app/App';
// import reportWebVitals from './reportWebVitals';

// eslint-disable-next-line no-unused-vars
const projectName = `25-5-clock`;

const container = document.getElementById('root');
const root = createRoot( container );
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/**
 * Remember:
 * If you are using react 17, you must render with:
 *
 * ReactDOM.render(<App />, container);
 */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
