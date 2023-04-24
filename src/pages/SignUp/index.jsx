import { SignUpSC } from './style';

import { Brand } from '../../components/Brand';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignUp() {
  return (
    <SignUpSC>
      <main>
        <Brand />
        
        <form>
          <legend>Faça login</legend>
          
          <Input label="Seu nome" type="text" placeholder="Exemplo: exemplo@exemplo.com.br" />

          <Input label="Email" type="email" placeholder="Exemplo: exemplo@exemplo.com.br" />

          <Input label="Senha" type="password" placeholder="No mínimo 6 caracteres" />

          <Button type="button" title="Criar conta" />

          <a href="#">Já tenho uma conta</a>
        </form>
      </main>
    </SignUpSC>
  )
};