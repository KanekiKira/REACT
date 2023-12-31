import React from 'react';

const Avatar = (props) => {
  const { src, alt } = props;
  return <img src={src} alt={alt} />;
};

export default Avatar;
