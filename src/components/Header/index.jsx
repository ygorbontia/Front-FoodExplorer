import { HeaderSC } from './style';

import menu from '../../assets/Menu.svg';
import receipt from '../../assets/Receipt.svg';

import { Brand } from '../Brand';

export function Header() {
  return (
    <HeaderSC>
      <nav>
        <button type="button">
          <img src={ menu } alt="Ícone de menu" />
        </button>

        <a href="#">
          <Brand />
        </a>

        <button type="button" className="receipt">
          <img src={ receipt } alt="Ícone de menu" />
          <span>0</span>
        </button>
      </nav>
    </HeaderSC>
  )
}