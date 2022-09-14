import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import UsersList from './UsersList';

const rootElement = document.querySelector('#root');
const root = createRoot(rootElement);

const usersList = [
  {
    id: 'id-0',
    age: 18,
    name: 'Tad',
  },
  {
    id: 'id-1',
    age: 45,
    name: 'Anna',
  },
  {
    id: 'id-2',
    age: 23,
    name: 'Bob',
  },
  {
    id: 'id-3',
    age: 45,
    name: 'Samanta',
  },
  {
    id: 'id-4',
    age: 33,
    name: 'Tadeush',
  },
  {
    id: 'id-5',
    age: 28,
    name: 'Anabell',
  },
  {
    id: 'id-6',
    age: 15,
    name: 'Aster',
  },
  {
    id: 'id-7',
    age: 38,
    name: 'Patrick',
  },
  {
    id: 'id-8',
    age: 24,
    name: 'Gvinet',
  },
  {
    id: 'id-9',
    age: 19,
    name: 'Coul',
  },
  {
    id: 'id-10',
    age: 14,
    name: 'Pol',
  },
  {
    id: 'id-11',
    age: 44,
    name: 'Karl',
  },
];

root.render(<UsersList users={usersList} />);
