import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Status from './Status';

const rootElem = document.querySelector('#root');
const root = createRoot(rootElem);

root.render(<Status isOnline />);
