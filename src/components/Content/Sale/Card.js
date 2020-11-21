import React from 'react';

import Button from '../../Header/Button';
const Card = ({ title, image }) => {
  const styles = { backgroundImage: `${image}` };
  return (
    <div className='sale__card' style={styles}>
      <div className='card-wrapper'>
        <h2 className='card__h2'>{title}</h2>
        <Button className='card__btn' label='Przeglądaj' />
      </div>
    </div>
  );
};

export default Card;
