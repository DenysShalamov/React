import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Toggler from './Toggler';


const rootElem = document.querySelector('#root');
const root = createRoot(rootElem);

root.render(<Toggler />);