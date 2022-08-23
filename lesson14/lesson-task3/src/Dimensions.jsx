import React, { useState, useEffect } from 'react';

const Dimensions = () => {
  const [dimension, setDimensions] = useState({ width: null, height: null });

  useEffect(() => {
    const { innerHeight, innerWidth } = window;
    setDimensions({ width: innerWidth, height: innerHeight });

    const onResize = e => {
      const { innerWidth, innerHeight } = e.target;
      setDimensions({ width: innerWidth, height: innerHeight });
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  const { width, height } = dimension;
  return <div className="dimensions">{`${width}px - ${height}px`}</div>;
};
export default Dimensions;
