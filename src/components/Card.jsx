import React from 'react';

const Card = (props) => {
  const { children } = props;
  return (
    <div style={{ border: '2px solid grey' }}>
      {children}
    </div>
  );
};

export default Card;

