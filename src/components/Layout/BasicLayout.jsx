import React from 'react';

const BasicLayout = ({ styles, children }) =>
  <div className="blue-bg" style={{
    height: '100%',
    width: '100%',
    position: 'fixed',
    overflow: 'scroll',
    paddingTop: '1.5rem',
  }}>
    <div style={{
      margin: '0 auto',
      maxWidth: 700,
      backgroundColor: 'white',
      borderRadius: 16,
      border: '4px ridge darkorange',
      padding: '0 2rem',
      fontFamily: 'Ubuntu',
      position: 'relative',
      ...styles,
    }}>
      {children}
    </div>
  </div>;

export default BasicLayout;
