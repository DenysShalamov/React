import React from 'react';
import Counter from './Counter';

const App = () => {
  return (
    <>
      <Counter start={0} interval={3600000}/>
      <Counter start={0} interval={60000}/>
      <Counter start={0} interval={1000}/>
    </>
  );
};

export default App;
