import React from 'react';
import { createRoot } from 'react-dom/client';
import './src/index.scss';
import App from './src/App';

const rootElem = document.querySelector('#root');
const root = createRoot(rootElem);

root.render(<App userId="github" />);
