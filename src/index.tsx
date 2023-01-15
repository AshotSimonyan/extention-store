import React from 'react';
import {createRoot} from 'react-dom/client';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

import App from './App';
import 'styles/style.scss';
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById('root')!;
const root = createRoot(container);

const queryClient = new QueryClient()

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App/>
        </QueryClientProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
