'use client'; 
import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/src/components/ProductsCards'; 

const mockUserData = {
  name: "Selena Gomez",
  username: "selenagomez",
  email: "selenamariegomez@rare.com",
  profileImage: "/images/profile.jpg", 
};

const mockProducts = [
    { nome: "Bronzer", preco: "R$ 254,99", imageurl: "/public/images/product_bronzer.png" },
    { nome: "Blush", preco: "R$ 199,99", imageurl: "/public/images/product_blush.png" },
    { nome: "Perfume Rare", preco: "R$ 599,90", imageurl: "/public/images/product_perfume.png" },
    { nome: "Iluminador", preco: "R$ 249,90", imageurl: "/public/images/product_iluminador.png" },
    { nome: "Mini Blush", preco: "R$ 99,99", imageurl: "/public/images/product_mini.png" },
];


export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-stone-50"> 
      
      <header className="bg-black text-white p-4 flex justify-between items-center h-16 max-w-full">
        <Link href="/" className="text-xl font-bold">STOCK.IO</Link>
        <div className="flex space-x-4">
          <span role="img" aria-label="carrinho">🛒</span>
          <span role="img" aria-label="mensagens">💬</span>
          <span role="img" aria-label="perfil">👤</span>
        </div>
      </header>

      <div className="relative">
        <div className="h-48 bg-black w-full"></div> 
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end -mt-24"> 
            
            <div className="flex items-center space-x-6">

              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white">
                <Image src={mockUserData.profileImage} alt={mockUserData.name} width={128} height={128} objectFit="cover" />
              </div>
              
              <div className="mt-8"> 
                <h1 className="text-3xl font-bold text-white-300">{mockUserData.name}</h1>
                <br></br>
                <p className="text-gray-500">@{mockUserData.username}</p>
                <p className="text-gray-500 text-sm mt-1">{mockUserData.email}</p>
              </div>
            </div>
            

            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-150">
              Editar Perfil
            </button>
          </div>
        </div>
      </div>
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Produtos</h2>
          <Link href="#" className="text-purple-600 text-sm hover:underline">ver mais</Link>
        </div>
        

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {mockProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        
      </div>
    </div>
  );
}