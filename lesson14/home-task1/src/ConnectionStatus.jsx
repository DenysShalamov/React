import React, { useState, useEffect } from 'react';
import className from 'classnames';

const ConnectionStatus = () => {
  const [status, setStatus] = useState('online');

  const onToggleStatus = event => {
    setStatus(event.type);
  };

  useEffect(() => {
    window.addEventListener('online', onToggleStatus);
    window.addEventListener('offline', onToggleStatus);

    return () => {
      window.removeEventListener('online', onToggleStatus);
      window.removeEventListener('offline', onToggleStatus);
    };
  }, []);

  return (
    <div
      className={className('status', { status_offline: status !== 'online' })}
    >
      {status}
    </div>
  );
};

export default ConnectionStatus;
