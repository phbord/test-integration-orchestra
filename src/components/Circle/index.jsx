import React from 'react';

const Circle = ({bgColor, isButton}) => {
  const customStyle = {
    backgroundColor: bgColor ? bgColor : '#fff'
  };

  return (
    <>
      {
        isButton
          ? <button type='button' className='circle' style={customStyle}/>
          : <span className='circle' style={customStyle}/>
      }
    </>
  );
};

export default Circle;