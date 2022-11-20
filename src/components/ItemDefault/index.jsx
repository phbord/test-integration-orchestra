import React from 'react';
import { Link } from 'react-router-dom';
import Circle from '../Circle';

const ItemDefault = ({item, hasPictures}) => {
  const LinkContent = item.circle
    ? <Circle bgColor='#BF8D30'/>
    : <Link to={item.url}>{item.value}</Link>

  return (
    <li>
      {
        hasPictures
          ? <img src={item.src} alt={item.alt}/>
          : LinkContent
      }
    </li>
  );
};

export default ItemDefault;