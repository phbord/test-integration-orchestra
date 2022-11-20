import React from 'react';
import LefttArrow from '../../assets/svg/arrow-left.svg';

const CircleArrowButton = ({type, isLeft}) => {
  return (
    <button type={type ? type : 'button'} className='btn-circle-arrow'>
      <img src={LefttArrow} alt='bouton droit' className={ isLeft ? 'rotate-180deg' : ''}/>
    </button>
  );
};

export default CircleArrowButton;