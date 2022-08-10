import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import NumbersList from './NumbersList';

const rootElem = document.querySelector('#root');
const root = createRoot(rootElem);

const nums = [1, 2, 3, 4, 5];

root.render(<NumbersList numbers={nums} />);
