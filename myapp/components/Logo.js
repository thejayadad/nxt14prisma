import Link from 'next/link';
import React from 'react';

const Logo = ({ size }) => {
  return (
    <Link href="/">
      <img
        src="../logo.png"
        className='adjustment'
        alt="Logo"
        style={{ width: size, height: 'auto' }}
      />
    </Link>
  );
};

export default Logo;
