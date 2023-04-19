import { SignInSC } from './style';

import { Input } from '../../components/Input';

export function SignIn() {
  return (
    <SignInSC>
      <Input label="Email" type="email" placeholder="Exemplo: exemplo@exemplo.com.br" />
    </SignInSC>
  )
};