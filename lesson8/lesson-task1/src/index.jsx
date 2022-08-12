import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Life from './Life';

const rootElem = document.querySelector('#root');
const root = createRoot(rootElem);

root.render(<Life />);
