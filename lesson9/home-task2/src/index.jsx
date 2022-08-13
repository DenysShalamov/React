import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Game from './Game';

const rootElem = document.querySelector('#root');
const root = createRoot(rootElem);

root.render(<Game />);
