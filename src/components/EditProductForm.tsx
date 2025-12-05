// src/components/EditProductForm.tsx
'use client';

import React, { useState } from 'react';
import { ProductData } from '@/src/tipos/product'; 

type EditableFields = 'name' | 'price' | 'description' | 'mainImageUrl';

interface EditFormProps {
  onClose: () => void;
  initialData: ProductData; 
  onUpdate: (updatedFields: { name: string; price: string; description: string; mainImageUrl: string }) => void;
}

const cleanPriceForInput = (priceString: string): string => {
    return priceString.replace('R$', '').trim();
};


export default function EditProductForm({ onClose, initialData, onUpdate }: EditFormProps) {

    const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: initialData.name,
    price: cleanPriceForInput(initialData.price), 
    description: initialData.description,
    mainImageUrl: initialData.imageUrl[0],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
        onUpdate(formData);
        setIsSubmitting(false);
    }, 1500);
  };
  
const handleCancel = () => {
    onClose();
};
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      
      {/* 1. Campo Nome do Produto */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-black">Nome:</label>
        <input
          type="text"
          id="name"
          className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-2 border"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      {/* 2. Campo Preço */}
      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Preço (R$):</label>
        <input
          type="text"
          id="price"
          className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-2 border"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>

      {/* 3. Campo Descrição */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descrição:</label>
        <textarea
          id="description"
          rows={10}
          className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-2 border"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      
      {/* 🔑 4. NOVO CAMPO: URL da Imagem Principal */}
      <div>
        <label htmlFor="mainImageUrl" className="block text-sm font-medium text-gray-700">URL da Imagem Principal:</label>
        <input
          type="text"
          id="mainImageUrl"
          className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-2 border"
          value={formData.mainImageUrl}
          onChange={handleChange}
          required
        />
      </div>

      {/* 5. Botão de Envio */}
      <div className="flex justify-end pt-4">
        <button
          type="submit"
          className="py-2 px-4 border border-transparent text-black rounded-md shadow-sm text-sm font-medium transition-colors duration-200 bg-orange-600 hover:bg-orange-700"
        >
          Salvar Alterações
        </button>
      </div>
    </form>
  );
}