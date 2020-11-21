import React from 'react';
import './style.css';

import Button from './Button';

const Header = () => {
  return (
    <div className='header'>
      <h2 className='header__h2'>just don't quit</h2>
      <h1 className='header__h1'>
        skorzystaj z dodatkowego rabatu na produkty z wyprzedaży
      </h1>
      <div>
        <Button className='header__btn' label='Przeglądaj' />
        <Button className='header__btn' label='*Zobacz szczegóły' />
      </div>
    </div>
  );
};

export default Header;
