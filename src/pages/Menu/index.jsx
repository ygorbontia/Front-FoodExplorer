import { MenuSC } from './style';

import { Link } from 'react-router-dom';

import close from '../../assets/Close.svg'

import { Search } from '../../components/Search';
import { Footer } from '../../components/Footer';

export function Menu({ admin }) {
  return (
    <MenuSC>
      <header>
        <Link to={ -1 }>
          <img src={ close } alt="" />

          Menu
        </Link>
      </header>

      <nav>
        <Search />

        <ul>
          { admin ?
            <li>
              <Link to={ "/new-dish" }>Novo prato</Link>
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