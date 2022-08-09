import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Page from './Page';

const rootElem = document.querySelector('#root');
const root = createRoot(rootElem);

root.render(<Page />);
