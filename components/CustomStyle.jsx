import React from 'react';

const CustomStyle = ({children, applyStyle}) => (
  <span style={{...applyStyle}}>
    {children}
  </span>
);

export default CustomStyle;
