/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Auth from './Auth';

const rootElem = document.querySelector('#root');
const root = createRoot(rootElem);

root.render(<Auth />);
