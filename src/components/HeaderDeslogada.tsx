
import Link from 'next/link';
import React from 'react';

export default function HeaderDeslogada() {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center h-16 max-w-full">
      <Link href="/" className="text-xl font-bold">STOCK.IO</Link>
      <div className="flex space-x-4">
        <button className='bg-purple-600 text-white font-bold py-2 px-4 rounded-lg'>
          LOGIN
        </button>
        <button className='bg-purple-600 text-white font-bold py-2 px-4 rounded-lg'>
          REGISTRE-SE
        </button>
      </div>
    </header>
  );
}