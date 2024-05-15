import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto py-6 flex flex-wrap justify-between items-center" style={{ maxWidth: '1100px' }}>
        <div className="text-2xl font-semibold">Blogger</div>
        <button className="text-white md:hidden" onClick={() => setIsOpen(!isOpen)}>&#9776;</button>
        <div className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-6 uppercase w-full md:w-auto`}>
          <a href="#" className="hover:text-gray-300 block mt-4 md:inline-block md:mt-0">Home</a>
          <a href="#" className="hover:text-gray-300 block mt-4 md:inline-block md:mt-0">Sobre</a>
          <a href="#" className="hover:text-gray-300 block mt-4 md:inline-block md:mt-0">Serviços</a>
          <a href="#" className="hover:text-gray-300 block mt-4 md:inline-block md:mt-0">Blog</a>
        </div>
        <button className="px-4 py-2 bg-white text-black rounded uppercase font-bold mt-4 md:mt-0">Faça Login</button>
      </div>
    </header>
  );
};

export default Header;
