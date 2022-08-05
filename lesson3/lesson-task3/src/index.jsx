import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import Comment from './Comment.jsx';

const rootElem = document.querySelector('#root');

const userInfo = {
  name: 'Tom',
  avatarUrl: 'https://avatars1.githubusercontent.com/u1003',
};

ReactDOM.render(<Comment author={userInfo} text="Good job!" date={new Date()}/>, rootElem);
