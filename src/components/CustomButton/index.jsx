import React from 'react';
import { Link } from 'react-router-dom';

const CustomButton = ({value, type, bgColor, color, isSquareBorder, isLink, url}) => {
  const newType = type ? value : 'button';
  const newBgColor = bgColor ? bgColor : '#99B4BF';
  const newColor = color ? color : '#fff';
  const newIsSquareBorder = isSquareBorder ? '.5rem' : '5rem';
  const newUrl = url ? url : '/';

  const customStyle = {
    paddingLeft: isSquareBorder ? '2.3rem' : '5.4rem',
    paddingRight: isSquareBorder ? '2.3rem' : '5.4rem',
    borderRadius: newIsSquareBorder,
    backgroundColor: newBgColor,
    color: newColor
  };

  return (
    <>
      {
        isLink
        ? (
          <Link to={newUrl}
                className="btn-custom"
                style={customStyle}>
            <span>{value}</span>
          </Link>
        )
        : (
          <button type={newType} 
                  className="btn-custom"
                  style={customStyle}>
            <span>{value}</span>
          </button>
        )
      }
    </>
  );
};

export default CustomButton;