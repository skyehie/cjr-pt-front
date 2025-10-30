`use client`;
import React, { use, useState } from 'react';
import { useRouter } from 'next/navigation';
import { log } from 'console';
import styles from './login.module.css'

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

            <div className = {styles.passwordWraper}>
              <input
              type = {senhaVisivel ? "text" : "senha"}
              id = "senha"
              placeholder = "senha" required
              value = {senha}
              onChange={(e) => setSenha(e.target.value)}
              />

              <button
              type = "button"
              onClick={() => setSenhaVisivel(!senhaVisivel)}
              className={styles.toggleButton}
              >{senhaVisivel ? '../Content/senhaEscondida.png': '../Content/senhaVisivel.png'}</button>
            </div>


          </form>

        </div>
      </div>
    )
}