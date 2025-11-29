// app/product/[id]/page.tsx
'use client'; 
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import HeaderLogada from '@/src/components/HeaderLogada';
import HeaderDeslogada from '@/src/components/HeaderDeslogada';
import ReviewForm from '@/src/components/ReviewForm';
import EditProductForm from '@/src/components/EditProductForm';
import Modals from '@/src/components/Modals';
import { ProductData } from '@/src/tipos/product';

const mockProduct = {
  id: '0',
  name: 'Brownie Meio Amargo',
  price: 'R$ 4,70',
  description: `BROWNIE DE DOCE DE LEITE 80g

    Recheado com doce de leite da melhor qualidade, esse brownie é um dos queridinhos da galera!

    Ingredientes
    Achocolatado em pó, farinha de trigo enriquecida com ferro e ácido fólico, doce de leite (leite integral e/ou leite em pó integral reconstituído, açúcar, cloreto de sódio, lactose e conservante sorbato de potássio), açúcar cristal, manteiga, água, ovo pasteurizado desidratato, emulsFicante: lecitina de soja, conservantes: propionato de cálcio e sorbato de potássio e antioxidantes: ins 321 e ins 319.


    CONTÉM GLÚTEN.
    CONTÉM LACTOSE.
    ALÉRGICOS: CONTÉM OVO E DERIVADOS DE LEITE, TRIGO E SOJA.`,
  imageUrl: ['/images/brownie.jpeg','/images/cachorro.jpg'],
  donoUrl: '/images/cjr.png',
  rating: 4.5,
  reviewCount: 15,
  available: 3,
  ownerName: 'CJR',
  ownerid: '1',
};

type EditableFields = {
  name: string; 
  price: string; 
  description: string; 
  mainImageUrl: string;
} 

interface User{
  id: string;
  name: string;
}

const mockUser: {[key:string]: User | null} = {
  comprador: { id: '2', name: 'Emanuely'},
  dono: { id: '1', name: 'CJR'},
  deslogado: null,
};

export default function ProductDetailPage() {
  const [productData, setProductData] = useState<ProductData>(mockProduct as ProductData);
  const [mainImage, setMainImage] = useState(productData.imageUrl[0] || '');

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const [currentUser, setCurrentUser] = useState<User | null>(mockUser.deslogado);
  const user = currentUser;

  const logado = user !== null;
  const dono = logado && user?.id === productData.ownerid;
  const comprador = logado && !dono;

  const handleProductUpdate = (updatedProduct: EditableFields) => {
    setProductData(prev => ({
      ...prev,
      name: updatedProduct.name,
      price: updatedProduct.price,
      description: updatedProduct.description,
      imageUrl: [updatedProduct.mainImageUrl, ...prev.imageUrl.slice(1)],
    }));
    setMainImage(updatedProduct.mainImageUrl);
    setIsEditModalOpen(false);
  }

  const handleMainButtonClick = () => {
    if (dono) {
      setIsEditModalOpen(true);
    }else if (comprador) {
      setIsReviewModalOpen(true);
    }}

  const handleReviewButtonClick = () => {
    if (comprador) {
      setIsReviewModalOpen(true);
    } else { window.location.href = '/login'; }
  };

  return (
    <div className="min-h-screen bg-white">

      {logado? (
        <HeaderLogada userName={user?.name} />
      ) : (
        <HeaderDeslogada />
      )}    
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Coluna da Imagem e Galeria (Lado Esquerdo) */}
          <div className="flex space-x-6">
            {/* Galeria de Thumbnails (Mock) */}
            <div className="flex flex-col space-y-3">
              {/* Ícone de Voltar (seta) */}
              <div className="text-2xl text-gray-500 cursor-pointer mb-2">
                &lt;
              </div>
            {productData.imageUrl.map((imageUrl, index) => (
              <div
                key={index}
                className={`w-16 h-16 bg-gray-100 rounded-lg border-2 ${
                  imageUrl === mainImage ? 'border-purple-600' : 'border-gray-200'
                } cursor-pointer transition-all duration-200`}
                onClick={() => setMainImage(imageUrl)}
              >
                <Image
                  src={imageUrl}
                  alt={`Thumbnail ${index + 1}`}
                  width={64}
                  height={64}
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
            </div>
            
            {/* Imagem Principal */}
            <div className="relative w-full max-w-md h-96 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <Image 
                src={mainImage}
                alt={productData.name}
                layout="fill"
                objectFit="contain"
                className="p-4"
              />
            </div>
          </div>
          
          <div>
            
            {/* Tag do Dono*/}
            <div className="mb-2 w-10 h-10 rounded-full overflow-hidden border-gray-200 border shadow-sm">
              <Image src={productData.donoUrl} alt={productData.ownerName} width={40} height={40} objectFit='cover' />
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {productData.name}
            </h1>
            
            {/* Avaliação e Preço */}
            <div className="mt-1 flex items-center space-x-4 text-sm">
              <span className="text-yellow-500 text-lg">⭐</span>
              <span className="font-semibold text-gray-500">{productData.rating}</span>
              <span className="text-gray-500">| {productData.reviewCount} reviews</span>
              <span className="text-gray-500">| {productData.ownerName}</span>
              <span className="text-green-600 font-semibold">{productData.available} disponíveis</span>
            </div>
            
            <p className="mt-4 text-4xl font-extrabold text-gray-900">
              R$ {productData.price}
            </p>

            <div className="mt-6 border-t pt-6">
              <h2 className="text-lg font-medium text-gray-900">Descrição</h2>
              <p className="whitespace-pre-wrap mt-2 text-gray-600 text-sm">{productData.description}</p>
            </div>
            
            {/* Botão de Ação (View Deslogado/Visitante) */}
            <div className="mt-8 space-y-4">
              <button
                type="button"
                onClick={handleMainButtonClick}
                className={`w-full py-3 px-8 text-white font-bold rounded-lg shadow-md transition 
                ${dono ? 'bg-orange-500 hover:bg-orange-600' : 'bg-purple-600 hover:bg-purple-700'}`}
              >
                {dono ? '✏️ Editar Produto' : '🛒 Adicionar ao Carrinho'}
              </button>
              { comprador && (
                <button
                type="button"
                onClick={handleReviewButtonClick}
                className="w-full py-3 px-8 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow-md transition" 
                >⭐ Gerar Avaliação
              </button>)}

              
              {!logado && (
                <p className="mt-4 text-sm text-center text-gray-500">
                  <Link href="/login" className="text-purple-600 hover:text-purple-700 font-semibold">
                    Faça login
                  </Link> para avaliar e mais ações.
                </p>
              )}
            </div>
            
          </div>
        </div>
      </div>
      
      {/*MESMA LOJA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Da mesma loja</h2>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex-shrink-0 w-48 p-3 bg-gray-50 rounded-xl shadow-sm border border-gray-200">
              <div className="w-full h-32 bg-gray-200 rounded-md mb-2"></div>
              <p className="text-sm font-semibold truncate">Produto Relacionado {index + 1}</p>
              <p className="text-xs text-gray-500">R$ 15,00</p>
            </div>
          ))}
        </div>
      </div>  
      {/* Modais */}
      {dono && (
        <Modals
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          title="Editar Produto"
        >
          <EditProductForm onClose={() => setIsEditModalOpen(false)} initialData={productData} onUpdate={handleProductUpdate} />
        </Modals>
      )}

      {comprador && (
        <Modals
          isOpen={isReviewModalOpen}
          onClose={() => setIsReviewModalOpen(false)}
          title="Gerar Avaliação"
        >
          <ReviewForm onClose={() => setIsReviewModalOpen(false)} />
        </Modals>
      )}
    </div>
  );
}