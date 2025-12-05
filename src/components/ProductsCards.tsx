import Image from 'next/image';

interface ProductCardProps {
  nome: string;
  preco: string;
  imageurl: string; 
}

export default function ProductCard({ nome, preco, imageurl }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 p-4 relative">
      
      <div className="relative w-full h-40">
        <Image 
          src={imageurl}
          alt={nome}
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="absolute top-2 right-2 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center border-2 border-white shadow">
        <span className="text-xs text-pink-600 font-bold">R</span>
      </div>

      <div className="mt-3 text-left">
        <p className="text-sm font-medium text-gray-800 line-clamp-2">{nome}</p>
        <p className="text-lg font-bold text-gray-900 mt-1">{preco}</p>
      </div>
    </div>
  );
}