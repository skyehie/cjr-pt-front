// src/components/Modals.tsx
'use client';

import React, { ReactNode } from 'react';

interface ModalsProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export default function Modals({ isOpen, onClose, title, children }: ModalsProps) {
  
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-white/30 backdrop-blur-sm flex items-center transition-opacity justify-center p-4"
      onClick={onClose} 
    >
      
      <div 
        className="bg-white rounded-xl shadow-2xl max-w-lg w-full transform transition-all"
        onClick={(e) => e.stopPropagation()} 
      >
        
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">
            {title}
          </h3>
          
          <button
            type="button"
            className="text-gray-400 hover:text-gray-600 transition-colors text-2xl font-bold p-1 leading-none"
            onClick={onClose}
            aria-label="Fechar"
          >
            &times;
          </button>
        </div>
        
        <div className="p-4">
          {children}
        </div>

      </div>
    </div>
  );
}