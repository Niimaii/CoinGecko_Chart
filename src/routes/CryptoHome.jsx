import React from 'react';
import Markets from '../components/Markets';
import Trending from '../components/Trending';

function CryptoHome() {
  return (
    <div className='wrapper-container'>
      <Trending />
      <Markets />
    </div>
  );
}

export default CryptoHome;
