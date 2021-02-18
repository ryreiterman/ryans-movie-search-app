import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router';
import 'tailwindcss/tailwind.css';

const app = document.getElementById('app');

ReactDOM.render(<AppRouter />, app);
