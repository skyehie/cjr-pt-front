"use client";

import React, { useState } from 'react';

interface EditStoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EditStoreModal({ isOpen, onClose }: EditStoreModalProps) {
  const [storeName, setStoreName] = useState(''); 
  const [category, setCategory] = useState('');

  if (!isOpen) return null;

  // Dentro de components/EditStoreModal.tsx

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3333/loja', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: storeName,
          categoria: category,
          
          usuarioId: 1, 
          
          descricao: '' 
        }),
      });

      if (response.ok) {
        alert('Loja criada com sucesso!');
        onClose();
      } else {
        alert('Erro ao criar loja.');
        console.error('Erro:', await response.text());
      }
    } catch (error) {
      console.error('Erro de conexão:', error);
      alert('Falha ao conectar com o servidor.');
    }
  };

  const handleDelete = () => {
    console.log("Deletando loja...");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
      
      <div className="bg-gray-100 w-full max-w-md rounded-[2rem] relative p-6 shadow-xl overflow-hidden">
        
        <button 
          onClick={onClose}
          className="absolute top-5 right-6 text-black text-2xl font-light leading-none hover:text-gray-700"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold text-center text-black mb-8 mt-2">
          Editar loja
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {}
          <input 
            type="text" 
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            className="w-full bg-white rounded-full px-6 py-3 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-400 shadow-sm"
            placeholder="Nome da loja"
          />

          {}
          <div className="relative">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={`w-full bg-white rounded-full px-6 py-3 appearance-none outline-none focus:ring-2 focus:ring-purple-400 shadow-sm cursor-pointer ${category === '' ? 'text-gray-400' : 'text-gray-800'}`}
            >
              {}
              <option value="" disabled>Categoria</option>
              
              {}
              <option>Mercado</option>
              <option>Farmácia</option>
              <option>Beleza</option>
              <option>Moda</option>
              <option>Eletrônico</option>
              <option>Jogos</option>
              <option>Brinquedos</option>
              <option>Casa</option>
            </select>
            
            {}
            <div className="pointer-events-none absolute inset-y-0 right-6 flex items-center px-2 text-gray-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>

          {}
          <UploadArea label="Anexe a foto de perfil de sua loja" icon="upload" />
          <UploadArea label="Anexe a logo em SVG de sua loja" icon="upload" />
          <UploadArea label="Anexe o banner de sua loja" icon="image" />

          {}
          <div className="space-y-3 mt-8">
            <button
              type="button"
              onClick={handleDelete}
              className="w-full bg-red-600 text-white font-bold py-3 rounded-full hover:bg-red-700 transition-colors uppercase text-sm tracking-wider"
            >
              DELETAR
            </button>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-bold py-3 rounded-full hover:bg-purple-700 transition-colors shadow-md uppercase text-sm tracking-wider"
            >
              Salvar
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

function UploadArea({ label, icon }: { label: string, icon: string }) {
  return (
    <div className="border-[1.5px] border-dashed border-[#6B47ED] bg-[#6B47ED]/5 rounded-2xl h-20 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#6B47ED]/10 transition-colors group">
      <div className="bg-[#6B47ED] text-white rounded p-1 mb-1 shadow-sm group-hover:scale-110 transition-transform">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      </div>
      <span className="text-gray-600 text-xs font-medium px-4">{label}</span>
    </div>
  );
}