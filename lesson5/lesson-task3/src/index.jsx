import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Counter from './Counter';

const rootElem = document.querySelector('#root');
const root = createRoot(rootElem);

root.render(<Counter />);
