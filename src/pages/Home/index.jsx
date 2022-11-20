import React from 'react';
import SlideshowBgImg from '../../assets/images/clouds_forest_lake.jpg';
import offerImg1 from '../../assets/images/beach_hostel_bridge.jpg';
import offerImg2 from '../../assets/images/beach_sea.jpg';
import offerImg3 from '../../assets/images/forest_woodhouse.jpg';
import offerImg4 from '../../assets/images/sea-island-hostel.jpg';
import CustomButton from '../../components/CustomButton';
import CircleArrowButton from '../../components/CircleArrowButton';
import Circle from '../../components/Circle';
import Offer from '../../components/Offer';

const Home = () => {
  const offerDatas = [
    { src: offerImg1, title: 'Salobre Hotel Resort & Serenity', subTitle: 'Canaries - Grande Canarie', details: '7 piscines, un superbe spa, 2 golfs et une gastronomie de haute volée, voici ce qui vous attend dans cet hôtel haut de gamme et design. Bonus : le panorama sur deux bijoux, les dunes de Maspalomas et le volcan du Teide !', price: '704', day: '5', night: '4' },
    { src: offerImg2, title: 'Kimpton Aluna Resort Tulum', subTitle: 'Mexique - Tulum', details: 'Entre piscines et rooftop, ce resort est l’endroit rêvé pour venir arpenter Tulum et ses ruines mayas. Plus calme que les autres, il permet de se reposer. Réellement.', price: '1 299', day: '5', night: '7' },
    { src: offerImg3, title: 'Salobre Hotel Resort & Serenity', subTitle: 'Canaries - Grande Canarie', details: 'Entre piscines et rooftop, ce resort est l’endroit rêvé pour venir arpenter Tulum et ses ruines mayas. Plus calme que les autres, il permet de se reposer. Réellement.', price: '844', day: '5', night: '4' },
    { src: offerImg4, title: 'Kimpton Aluna Resort Tulum', subTitle: 'Mexique - Tulum', details: '7 piscines, un superbe spa, 2 golfs et une gastronomie de haute volée, voici ce qui vous attend dans cet hôtel haut de gamme et design. Bonus : le panorama sur deux bijoux, les dunes de Maspalomas et le volcan du Teide !', price: '2 014', day: '5', night: '14' }
  ];

  return (
    <>
      <section className='slideshow'>
        <ul className='slideshow__list'>
          <li>
            <img src={SlideshowBgImg} alt='diaporama'/>
            <h1>Où et quand partir</h1>
            <p>SELON VOS ENVIE</p>
            <CustomButton value='Découvrir' bgColor='#fff' color='#BF8D30' isLink/>
          </li>
          <li>
            <img src={SlideshowBgImg} alt='diaporama'/>
            <h1>Où et quand partir</h1>
            <p>SELON VOS ENVIE</p>
            <CustomButton value='Découvrir' bgColor='#fff' color='#BF8D30' isLink/>
          </li>
        </ul>
        <nav className='slideshow__nav'>
          <CircleArrowButton isLeft/>
          <CircleArrowButton/>
          <ul className='circle-nav'>
            <li>
              <Circle bgColor='#BF8D30' isButton/>
            </li>
            <li>
              <Circle isButton/>
            </li>
            <li>
              <Circle isButton/>
            </li>
          </ul>
        </nav>
      </section>
      <section className='offers'>
        <div className='l-container'>
          <h1>Nos offres du moment</h1>
          <ul className='offers__list'>
            {
              offerDatas?.map((offerData, index) => (
                <li key={index}>
                  <Offer offers={offerData}/>
                </li>
              ))
            }
          </ul>
        </div>
      </section>
      <section className='guide'>
        <div className='l-container'>
          <div className='guide__body'>
            <h1>Les guides de voyage</h1>
            <p>
              Dans la droite ligne de son concept et de ses valeurs, nous avons créé des guides de voyage présentant chaque destination sous ses aspects généraux mais aussi économiques, écologiques, et son impact sociétal. Il y a, dans ces guides, un oeil sur les enjeux environnementaux de chaque pays, pour vous aider à décider lequel fera l'objet de votre prochain voyage.
            </p>
            <CustomButton value='Voir tous les guides' isLink/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;