import React from 'react';

const BasicLayout = ({ children }) =>
  <div style={{
    margin: '0 auto',
    maxWidth: 700,
    backgroundColor: 'white',
    borderRadius: 16,
    border: '4px ridge darkorange',
    padding: '0 2rem'
  }}>
    {children}
  </div>

export default BasicLayout;
