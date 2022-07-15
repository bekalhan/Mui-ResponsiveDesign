import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/*
default breakpoints
sx => 0px
sm => 600px
md => 900px
lg => 1200px
xl => 1536px
*/ 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

