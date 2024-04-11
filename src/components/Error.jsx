import React from 'react';

export const Error = () => {
  return (
    <div>
      <h1>Error</h1>
      <br />
      <h1>404</h1>
      <h1 style={{ color: 'red' }}>{`< Route not found >`}</h1>
    </div>
  );
}