"use client";
import React, { use, useState } from 'react';
import { useRouter } from 'next/navigation';
import { log } from 'console';
import { FaEye } from 'react-icons/fa';
import {FaRegEyeSlash} from 'react-icons/fa';
import Modals from '@/src/components/Modals';

export default function LoginPage() {
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [erro, setErro] = React.useState('');
  const [senhaVisivel, setSenhaVisivel] = React.useState(false); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  
  //const { setLoggedInUser } = 

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !senha) {
      setErro('Por favor, preencha todos os campos.');
      return;
    }
    //try{}
    //catch{}

      

    };

    return(
      <div className="container">

        <div className="logInBox">
          <form className="inputGroup" onSubmit={handleLogin}>
            <input
              type="email"
              id = "email"
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="inputField"
            />

            <div className = "passwordWraper">
              <input
              type = {senhaVisivel ? "text" : "password"}
              id = "senha"
              placeholder = "Senha" 
              value = {senha}
              onChange={(e) => setSenha(e.target.value)}
              />

              <button
              type = "button"
              onClick={() => setSenhaVisivel(!senhaVisivel)}
              className="toggleButton">
              </button>
            </div>

            <div>
              <button onClick={() => setIsModalOpen(true)} className="submitButton">Modal</button>
            </div>


          </form>

        </div>
        {isModalOpen && <Modals />}
      </div>
    )
}