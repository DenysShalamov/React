import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Mailbox from './Mailbox';

const rootElem = document.querySelector('#root');
const root = createRoot(rootElem);

root.render(<Mailbox unreadMessages={[]} />);
