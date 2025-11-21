// app/page.tsx
"use client";

import { useState } from "react";
// Importando usando o caminho relativo simples para evitar erros
import { EditStoreModal } from "../components/EditStoreModel"; 

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-200">
      
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Projeto CJR
        </h1>
        
        {/* Botão para testar o modal */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#6B47ED] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-purple-800 transition transform hover:scale-105"
        >
          ABRIR MODAL (FIGMA)
        </button>
      </div>

      {/* O Modal */}
      <EditStoreModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

    </main>
  );
}