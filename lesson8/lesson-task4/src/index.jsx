import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import User from './User';

const rootElem = document.querySelector('#root');
const root = createRoot(rootElem);

root.render(<User userId="facebook" />);
