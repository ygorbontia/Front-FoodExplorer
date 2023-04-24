import { MenuSC } from './style';

import close from '../../assets/Close.svg'

import { Search } from '../../components/Search';
import { Footer } from '../../components/Footer';

export function Menu({ admin }) {
  return (
    <MenuSC>
      <header>
        <button type="button">
          <img src={ close } alt="" />

          Menu
        </button>
      </header>

      <nav>
        <Search />

        <ul>
          { admin ?
            <li>
              <a href="">Novo prato</a>
            </li>
          :
            false
          }
          <li>
            <a href="">Sair</a>
          </li>
        </ul>
      </nav>

      <Footer />
    </MenuSC>
  )
}