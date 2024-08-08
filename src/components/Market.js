import React from 'react';
import '../App.css';
import itservice from '../assets/itservice.jpg';
import corporate from '../assets/cooperate.jpeg';
import education from '../assets/education.webp';
import retail from '../assets/retail.jpg';
import Entertainment from '../assets/entertain.jpeg';
import government from '../assets/govt.avif';
import { Parallax } from 'react-scroll-parallax';

function MarketsServed() {
  const marketItems = [
    { image: corporate, label: 'Corporate/Enterprise' },
    { image: itservice, label: 'IT services' },
    { image: education, label: 'Education' },
    { image: retail, label: 'Retail' },
    { image: government, label: 'Government/Public Sector' },
    { image: Entertainment, label: 'Hospitality & Entertainment' },
  ];

  return (
    <div className="markets-served  mt-[-30px] mb-8">

      <Parallax translateY={['-50px', '20px']} className='' scale={[1, 1.05]} opacity={[0.2, 10]}>

        <div className='w-[100%] flex justify-center '>
          <div className='w-[80%]'>
            <h2 className=''>MARKETS WE SERVE</h2>
            <p>
              Aesthetix serves a variety of markets and industries in the US and around
              the world. Our industry-focused teams, commitment to ongoing training,
              and unwavering focus on client success enable us to provide outstanding
              client experiences in every market we serve.
            </p>

          </div>
        </div>

      </Parallax>


      <div className="market-grid mt-12">
        {marketItems.map((item, index) => (
          <div
            key={index}
            className="market-item"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <h3>{item.label}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarketsServed;
