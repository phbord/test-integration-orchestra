import React from 'react';
import CustomButton from '../CustomButton';

const Offer = ({offers}) => {
  return (
    <article className='offer'>
      <img src={offers.src} alt={offers.title}/>
      <div className='offer__body'>
        <h2>{offers.title}</h2>
        <h3>{offers.subTitle}</h3>
        <p>{offers.details}</p>
        <div className='offer__body__details'>
          <div className=''>
            <div className='offer__body__details__travel'>Avec transport</div>
            <div className='offer__body__details__price'>
              <strong>{offers.price}</strong>
              <span>/ pers.</span>
            </div>
            <div className='offer__body__details__time'>
              <span>{offers.day} €</span>
              <span> jours / </span>
              <span>{offers.night}</span>
              <span> nuits</span>
            </div>
          </div>
          <CustomButton value='Voir +' 
                        bgColor='#99B4BF'
                        color='#fff'
                        isSquareBorder
                        isLink/>
        </div>
      </div>
    </article>
  );
};

export default Offer;