import { SignInSC } from './style';

import { api } from '../../services/api';

import { useState } from 'react'

import { Link } from 'react-router-dom'

import { Brand } from '../../components/Brand';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignIn() {
  const [ email, setEmail ] = useState();
  const [ password, setPassword ] = useState();

  function handleSignIn() {
    api.post("/sessions", { email, password }).then(() => {
      return alert("Login efetuado com sucesso!");
    }).catch(err => {
      if (err.response) {
        return alert(err.response.data.message);
      } else {
        return alert("Erro ao efetuar login.");
      }
    })
  }

  return (
    <SignInSC>
      <main>
        <Brand />
        
        <form>
          <legend>Faça login</legend>

          <Input label="Email" type="email" placeholder="Exemplo: exemplo@exemplo.com.br" onChange={ e => setEmail(e.target.value ) } />

          <Input label="Senha" type="password" placeholder="No mínimo 6 caracteres" onChange={ e => setPassword(e.target.value ) }  />

          <Button type="button" title="Entrar" onClick={ handleSignIn } />

          <Link to="/register">Criar uma conta</Link>
        </form>
      </main>
    </SignInSC>
  )
};