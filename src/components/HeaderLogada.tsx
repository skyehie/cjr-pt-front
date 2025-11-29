
import Link from 'next/link';
import React from 'react';


interface LoggedInHeaderProps {
    userName?: string; 
}


export default function LoggedInHeader({ userName }: LoggedInHeaderProps) {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center h-16 max-w-full">
      <Link href="/" className="text-xl font-bold">STOCK.IO</Link>
      
      <div className="flex space-x-4 items-center">
        <span className="text-2xl cursor-pointer">🛒</span>
        
        <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-300 hidden sm:inline">{userName || 'Usuário'}</span>
            <span 
                className="text-2xl cursor-pointer"
                title="Usuário"
            >
                👤
            </span>
        </div>
      </div>
    </header>
  );
}
