import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import TransactionsList from './TransactionsList';

const rootElem = document.querySelector('#root');
const root = createRoot(rootElem);

const transactions = [
  {
    id: 'id-0',
    from: 'USD',
    to: 'EUR',
    amount: 1200,
    rate: 0.8,
    time: '2019-01-10T17:08:35.447Z',
  },
  {
    id: 'id-1',
    from: 'USD',
    to: 'UAH',
    amount: 100000,
    rate: 25.7,
    time: '2019-01-10T18:22:35.447Z',
  },
  {
    id: 'id-2',
    from: 'EUR',
    to: 'USD',
    amount: 100,
    rate: 1.1,
    time: '2019-01-10T17:01:35.447Z',
  },
];

root.render(<TransactionsList transactions={transactions} />);
