// src/components/ReviewForm.tsx
'use client';

import React, { useState } from 'react';

interface ReviewFormProps {
  onClose: () => void;
}

export default function ReviewForm({ onClose }: ReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    console.log('Avaliação Submetida:', { rating, comment });
    
    setTimeout(() => {
      setIsSubmitting(false);
      alert(`Avaliação de ${rating} estrelas enviada com sucesso!`);
      onClose();
    }, 1500); 
  };
  
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-3xl cursor-pointer transition-colors duration-150 ${
            i <= rating ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-300'
          }`}
          onClick={() => setRating(i)}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Sua Nota:</label>
        <div className="flex space-x-1">
          {renderStars()}
        </div>
      </div>

      <div>
        <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Comentário:</label>
        <textarea
          id="comment"
          rows={4}
          className="text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm p-2 border"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={rating === 0 || isSubmitting}
          className={`py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white transition-colors duration-200 ${
            (rating === 0 || isSubmitting) 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Avaliação'}
        </button>
      </div>
    </form>
  );
}