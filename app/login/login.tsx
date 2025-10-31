"use client";
import React, { use, useState } from 'react';
import { useRouter } from 'next/navigation';
import { log } from 'console';
import { FaEye } from 'react-icons/fa';
import {FaRegEyeSlash} from 'react-icons/fa';



export default function LoginPage() {
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [erro, setErro] = React.useState('');
  const [senhaVisivel, setSenhaVisivel] = React.useState(false); 

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
              placeholder="Email" required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="inputField"
            />

            <div className = "passwordWraper">
              <input
              type = {senhaVisivel ? "text" : "password"}
              id = "senha"
              placeholder = "Senha" required
              value = {senha}
              onChange={(e) => setSenha(e.target.value)}
              />

              <button
              type = "button"
              onClick={() => setSenhaVisivel(!senhaVisivel)}
              className="toggleButton">
                {senhaVisivel ? <FaEye /> : <FaRegEyeSlash />}
              </button>
            </div>


          </form>

        </div>
      </div>
    )
}