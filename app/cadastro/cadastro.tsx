import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Cadastro = () => {

const formBackgroundColor = '#232323'; 

const accentColor = '#FFFAFA'; 

return (

<div className="min-h-screen bg-black flex items-center justify-center">
      
 <div 
    style={{ backgroundColor: formBackgroundColor }} 
    className="flex w-full h-screen shadow-none overflow-hidden" 
>
 <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
          
 <h2 className="text-white text-3xl sm:text-4xl font-extrabold mb-8 text-center">
    CRIE SUA CONTA
</h2>

    <form className="space-y-4">
    <input
     type="text"
     placeholder="Nome completo"
    className="w-full p-3 bg-white text-black border-none rounded-lg focus:ring-purple-600 focus:border-purple-600 focus:outline-none"
 />
<input
     type="text"
     placeholder="Username"
    className="w-full p-3 bg-white text-black border-none rounded-lg focus:ring-purple-600 focus:border-purple-600 focus:outline-none"
/>
    <input
    type="email"
    placeholder="Email"
    className="w-full p-3 bg-white text-black border-none rounded-lg focus:ring-purple-600 focus:border-purple-600 focus:outline-none"
/>
 <input
     type="password"
    placeholder="Senha"
    className="w-full p-3 bg-white text-black border-none rounded-lg focus:ring-purple-600 focus:border-purple-600 focus:outline-none"
 />
<input
    type="password"
placeholder="Confirmar Senha"
className="w-full p-3 bg-white text-black border-none rounded-lg focus:ring-purple-600 focus:border-purple-600 focus:outline-none"
/>

 <button //botao criar conta
    type="submit"
    className="w-full p-3 mt-6 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition duration-300 uppercase"
>
    CRIAR CONTA
</button>
</form>
    <div className="mt-4 text-center text-white text-sm">
    <p className="inline">
    Já possui uma conta?{' '}
    <Link href="/login" className="text-purple-600 hover:underline font-semibold">
        Login
    </Link>
    </p>
    </div>
</div>

<div 
    style={{ backgroundColor: accentColor }} 
    className="hidden md:flex md:w-1/2 relative p-8 sm:p-12 flex-col items-center justify-center space-y-4 h-full"
>
<div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
<Image
    src="/images/logostock.png"   //implementando a logo
     alt="Logo da Stock.io"
    width={400} 
    height={70} 
     objectFit="contain"
/>
</div>
<div className="relative w-full max-w-7xl aspect-square mt-90"> 
 <Image
    src="/images/bonecastock.png"  //implementando a boneca
    alt="Ilustração da Stock.io"
    layout="fill"
    objectFit="contain"
     priority
 />
 </div>
           </div>

</div>
</div>
  );
};
export default Cadastro;
