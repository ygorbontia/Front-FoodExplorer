import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom'

import ClipLoader from "react-spinners/ClipLoader";

import { api } from '../../services/api';

import { SignUpSC } from './style';

import { Brand } from '../../components/Brand';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignUp() {
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ loading, setLoading ] = useState(false);

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    setLoading(true)
    api.post("/user", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
    })
      .catch( err => {
        setLoading(false)
        if (err.response) {
          alert(err.response.data.message);
        } else {
          alert("Não foi possível cadastrar o usuário");
        }
      });
  }

  return (
    <SignUpSC>
      <main>
        <Brand />
        
        <form>
          <legend>Faça login</legend>
          
          <Input label="Seu nome" type="text" placeholder="Exemplo: exemplo@exemplo.com.br" onChange={ e => setName(e.target.value) } />

          <Input label="Email" type="email" placeholder="Exemplo: exemplo@exemplo.com.br" onChange={ e => setEmail(e.target.value) } />

          <Input label="Senha" type="password" placeholder="No mínimo 6 caracteres" onChange={ e => setPassword(e.target.value) } />

          <Button type="button" title="Criar conta" onClick={ handleSignUp } />

          <Link to={ -1 }>Já tenho uma conta</Link>
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
    </SignUpSC>
  )
};