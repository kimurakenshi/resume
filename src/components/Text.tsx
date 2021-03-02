import React, { ReactDOM } from 'react';

const Text = ({ children, htmlTag = 'p' }) => {
  return React.createElement(
    htmlTag,
    { className: 'text-xs md:text-sm' },
    children
  );
};

export default Text;
