import { SignInSC } from './style';

import { Brand } from '../../components/Brand';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignIn() {
  return (
    <SignInSC>
      <main>
        <Brand />
        
        <form>
          <Input label="Email" type="email" placeholder="Exemplo: exemplo@exemplo.com.br" />

          <Input label="Senha" type="password" placeholder="No mínimo 6 caracteres" />

          <Button type="button" title="Entrar" />

          <a href="#">Criar uma conta</a>
        </form>
      </main>
    </SignInSC>
  )
};