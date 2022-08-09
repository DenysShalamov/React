import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import ColorPicker from './ColorPicker';


const rootElem = document.querySelector('#root');
const root = createRoot(rootElem);

root.render(<ColorPicker />);