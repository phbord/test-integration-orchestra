import React from 'react';
import { Link } from 'react-router-dom';
import ItemDefault from '../ItemDefault';

const Navigation = () => {
  const cgiList = [
    { url: "/", value: "séjours" },
    { url: "/", value: "clubs" },
    { url: "/", value: "circuit" },
    { url: "/", value: "croisières" },
    { url: "/", value: "thématiques" },
    { circle: true },
    { url: "/", value: "Où partir ?" }
  ];

  return (
    <nav className='header__menu'>
      <ul className='header__menu__list'>
        {
          cgiList?.map((item, index) => (
            <ItemDefault item={item} key={index}/>
          ))
        }
      </ul>
    </nav>
  );
};

export default Navigation;