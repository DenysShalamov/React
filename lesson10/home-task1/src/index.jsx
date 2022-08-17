import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Calculator from './Calculator';

const rootElem = document.querySelector('#root');
const root = createRoot(rootElem);

root.render(<Calculator />);
