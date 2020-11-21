import React from 'react';

import './style.css';
import Card from './Card';
import sale from '../data/sale.json';

const Sale = () => {
  return (
    <div className='sale'>
      <h3 className='sale__h3'>Przeglądaj produkty objęte wyprzedażą</h3>
      <div className='sale__cards'>
        {sale.map((elem) => (
          <Card key={`post-${elem.id}`} title={elem.title} image={elem.image} />
        ))}
      </div>
    </div>
  );
};

export default Sale;
