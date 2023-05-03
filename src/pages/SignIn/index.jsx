import { SignInSC } from './style';

import { useAuth } from '../../hooks/auth';

import ClipLoader from "react-spinners/ClipLoader";

import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Brand } from '../../components/Brand';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignIn() {
  const [ email, setEmail ] = useState();
  const [ password, setPassword ] = useState();
  const [ loading, setLoading ] = useState(false);

  const { signIn } = useAuth();

  function handleSignIn() {
    try {
      signIn({ email, password });
    } catch (err) {
      if (!err) {
        setLoading(true)
      }
    }
  }

  return (
    <SignInSC>
      <main>
        <Brand />
        
        <form>
          <legend>Faça login</legend>

          <Input label="Email" type="email" placeholder="Exemplo: exemplo@exemplo.com.br" onChange={ e => setEmail(e.target.value ) } />

          <Input label="Senha" type="password" placeholder="No mínimo 6 caracteres" onChange={ e => setPassword(e.target.value ) }  />

          <Button type="button" title="Entrar" onClick={ handleSignIn } disabled={ loading } />

          <Link to="/register">Criar uma conta</Link>
        </form>
      </main>

      <div className="loading" hidden={!loading}>
        <ClipLoader
          loading={loading}
          size={150}
          color="rgba(171,77,85,1)"
          aria-label="Loading Spinner"
          data-testid="loader"
        />

        <p hidden={!loading}>Carregando...</p>
      </div>
    </SignInSC>
  )
};