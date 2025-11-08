"use client";
import React, { useState } from "react";
 import { useRouter } from "next/navigation"; 
import { FaEye, FaRegEyeSlash } from "react-icons/fa";

// Componentes de Ícone de Olho 
const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
    <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
    <path fillRule="evenodd" d="M.661 10A10.884 10.884 0 0010 16c2.516 0 4.908-.77 6.945-2.13.123-.083.256-.145.4-.199a.75.75 0 00-.236-1.474c-.198.05-.398.113-.6.188-1.897 1.135-4.225 1.775-6.509 1.775S4.333 13.568 2.436 12.433c-.202-.075-.403-.138-.601-.188a.75.75 0 10-.236 1.474c.144.054.277.116.4.199A10.884 10.884 0 0010 16a10.884 10.884 0 009.339-6.002.75.75 0 10-1.353-.655A9.38 9.38 0 0110 15c-2.228 0-4.423-.623-6.196-1.78a.75.75 0 00-.73-.131z" clipRule="evenodd" />
  </svg>
);

const EyeSlashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
    <path fillRule="evenodd" d="M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06L3.28 2.22zM10.883 4.91a10.882 10.882 0 00-7.382 2.68.75.75 0 00.162 1.18c.243.14.536.223.834.257 1.488.164 2.766.46 3.913.914.582.23.637.37.078 1.455-1.127 2.155-2.073 4.29-2.259 5.861a.75.75 0 101.446.294c.264-1.284 1.178-3.328 2.493-5.748.56-1.077.01-1.218-.57-1.458-1.15-.453-2.427-.749-3.914-.913-.157-.018-.31-.027-.456-.03-.021-.002-.04-.002-.059-.002zm-1.096-1.166a10.882 10.882 0 017.382 2.68.75.75 0 01-.162 1.18c-.243.14-.536.223-.834.257-1.488.164-2.766.46-3.913.914-.582.23-.637.37-.078 1.455 1.127 2.155 2.073 4.29 2.259 5.861a.75.75 0 01-1.446.294c-.264-1.284-1.178-3.328-2.493-5.748-.56-1.077-.01-1.218.57-1.458 1.15-.453 2.427-.749 3.914-.913.157-.018.31-.027.456-.03.021-.002.04-.002.059-.002zM10 12.5a2.5 2.5 0 00-2.453 2.056l1.373-1.373A1.002 1.002 0 019 12.5z" clipRule="evenodd" />
  </svg>
);

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [senhaVisivel, setSenhaVisivel] = useState(false);


  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !senha) {
      setErro("Por favor, preencha todos os campos.");
      return;
    }
    // Falta API de login
    console.log("Tentativa de Login:", { email, senha });

  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex flex-col items-center justify-center p-4">
      
      {/* Logo*/}
      <div className="mb-8 w-full flex justify-center px-4">
        <img
          src="/logostock.png" 
          alt="Logo Stock"
          className="w-full max-w-[350px] h-auto object-contain" 
        />
      </div>

    
      <div className="flex w-full h-auto rounded-3xl overflow-hidden shadow-2xl bg-white/70 backdrop-blur-sm">
        
        {/* Lado Esquerdo - Boneco */}
        <div className="hidden md:flex w-2/5 items-center justify-center bg-[#FAF9F6] p-10"> 
          <img
            src="/bonecostock.png" 
            alt="Boneco Stock"
            className="w-full h-full object-contain drop-shadow-xl max-w-[700px] max-h-[700px]"
          />
        </div>

        {/* Lado Direito - Login */}
        <div className="flex w-full md:w-3/5 items-center justify-center p-6 md:p-12 bg-[#FAF9F6]">
          <div className="bg-[#1E1E1E] rounded-2xl shadow-2xl px-8 py-10 sm:px-12 sm:py-14 w-full max-w-[900px] text-white transition-transform duration-300">
            <h1 className="text-[58px] font-extrabold text-center mb-10 tracking-wider text-white">
              BEM-VINDO DE VOLTA!
            </h1>

            {erro && (
              <p className="text-red-400 text-center mb-4 font-medium p-2 border border-red-400 rounded-lg bg-red-900/20">{erro}</p>
            )}

            <form onSubmit={handleLogin} className="flex flex-col space-y-6">
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFFFFF] transition-all border border-transparent hover:border-white" 
                required
              />

              <div className="relative">
                <input
                  type={senhaVisivel ? "text" : "password"}
                  id="senha"
                  placeholder="Senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white[#FFFFFF] transition-all border border-transparent hover:border-white"
                  required
                />
                <button
                  type="button"
                  onClick={() => setSenhaVisivel(!senhaVisivel)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {senhaVisivel ? <EyeIcon /> : <EyeSlashIcon />}
                </button>
              </div>

              <div className="text-right">
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors underline-offset-4 hover:underline"
                >
                  Esqueceu sua senha?
                </a>
              </div>

              <button
                type="submit"
                className="bg-[#A020F0] hover:bg-BlueViolet-138 text-white font-bold py-3 rounded-lg mt-4 shadow-lg shadow-violet-700 transition-all duration-200 uppercase tracking-widest transform hover:scale-[1.02]"
              >
                ENTRAR
              </button>

              <p className="text-center text-sm mt-6 text-gray-400">
                Não possui uma conta?{" "}
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 font-semibold underline"
                >
                  Cadastre-se
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}