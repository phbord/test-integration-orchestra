import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/svg/logo-light.svg';
import CBLogo from '../../assets/images/icon_cb.jpg';
import MastercardLogo from '../../assets/images/icon_mastercard.jpg';
import VisaLogo from '../../assets/images/icon_visa.jpg';
import GreenFlowerLogo from '../../assets/images/icon_flower.jpg';
import FourXLogo from '../../assets/images/icon_4x.jpg';
import PurpleSquareLogo from '../../assets/images/icon_square.jpg';
import BitcoinsLogo from '../../assets/images/icon_bitcoins.jpg';
import PyramideLogo from '../../assets/images/icon_pyramide.jpg';
import CircleArrowButton from '../CircleArrowButton';
import ItemDefault from '../ItemDefault';

const Footer = () => {
  const navList1 = [
    { url: "/", value: "Voyage éthique" },
    { url: "/", value: "Expertise" },
    { url: "/", value: "France" },
    { url: "/", value: "Voyages" }
  ];
  const navList2 = [
    { url: "/", value: "Séjours" },
    { url: "/", value: "Weekends" },
    { url: "/", value: "Glamping" },
    { url: "/", value: "Aventure" }
  ];
  const navList3 = [
    { url: "/", value: "A propos" },
    { url: "/", value: "Actualités" },
    { url: "/", value: "Recrutement" }
  ];
  const cgiList = [
    { url: "/", value: "CRÉDITS & MENTIONS" },
    { url: "/", value: "CONDITIONS GÉNÉRALES DE VENTE" },
    { url: "/", value: "DONNÉES PERSONNELLES ET RGPD" }
  ];
  const iconList = [
    { src: CBLogo, alt: "logo CB" },
    { src: MastercardLogo, alt: "logo Master Card" },
    { src: VisaLogo, alt: "logo Visa" },
    { src: GreenFlowerLogo, alt: "logo Green Flower" },
    { src: FourXLogo, alt: "logo 4X" },
    { src: PurpleSquareLogo, alt: "logo Purple Square" },
    { src: BitcoinsLogo, alt: "logo Bitcoins" },
    { src: PyramideLogo, alt: "logo Pyramide" }
  ];

  return (
    <footer className='footer'>
      <form action="" method="post" className='footer__form' id='news-form'>
        <div className='l-container'>
          <div className='l-content'>
            <h1>Restez connecté à toutes nos actualités !</h1>
            <fieldset className='footer__form__input-group'>
              <input type="text" placeholder="mail@exemple.com"></input>
              <CircleArrowButton type='submit'/>
            </fieldset>
          </div>
        </div>
      </form>
      <section className='footer__menu'>
        <div className='l-container'>
          <div className='footer__sub-menu'>
            <div className='footer__sub-menu__logo-group'>
              <Link to="/" className='footer__link__logo'>
                <img src={Logo} alt='logo Orchestra' className='footer__title__logo'/>
              </Link>
            </div>
            <nav className='footer__sub-menu__nav'>
              <div className='row justify-content-end'>
                <ul className='col-xs-12 col-sm-12 col-md-3 col-lg-3'>
                  {
                    navList1?.map((item, index) => (
                      <ItemDefault item={item} key={index}/>
                    ))
                  }
                </ul>
                <ul className='col-xs-12 col-sm-12 col-md-3 col-lg-3'>
                  {
                    navList2?.map((item, index) => (
                      <ItemDefault item={item} key={index}/>
                    ))
                  }
                </ul>
                <ul className='col-xs-12 col-sm-12 col-md-3 col-lg-3'>
                  {
                    navList3?.map((item, index) => (
                      <ItemDefault item={item} key={index}/>
                    ))
                  }
                </ul>
              </div>
            </nav>
          </div>
          <div className='footer__infos'>
            Les catégories de clubs et hôtels sont indiquées en normes locales. Les tarifs de nos voyages incluent les taxes aéroports obligatoires et surcharges carburants connues à ce jour. Les tarifs sont sous réserve de disponibilités et s'entendent "à partir de". Ces tarifs n'incluent ni les taxes locales ou administratives éventuelles (taxes de séjours, taxes d’entrée ou de sortie de certains pays, frais de visa…), ni les suppléments spécifiques susceptibles de s'appliquer à certaines destinations, ni les variations éventuelles de prix ultérieures à l'achat relatifs aux hausses carburant ou variation de taxes. Les tarifs affichés tiennent déjà compte des remises et promotions éventuelles. Les promotions sont non cumulables et non rétroactives.
          </div>
        </div>
      </section>
      <section className='footer__credits'>
        <div className='l-container'>
          <div className='footer__sub-credits'>
            <ul className='footer__sub-credits__icon-list'>
              {
                iconList?.map((item, index) => (
                  <ItemDefault item={item} hasPictures key={index}/>
                ))
              }
            </ul>
            <ul className='footer__sub-credits__cgi'>
              {
                cgiList?.map((item, index) => (
                  <ItemDefault item={item} key={index}/>
                ))
              }
            </ul>
          </div>
        </div>
     </section>
    </footer>
  );
};

export default Footer;