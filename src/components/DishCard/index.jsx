import { DishCardSC } from './style';

import dish from '../../assets/dishes/image 2.png';
import increase from '../../assets/Increase.svg';
import decrease from '../../assets/Decrease.svg';
import emptyFavorite from '../../assets/favorite-empty.svg';

export function DishCard() {
  return (
    <DishCardSC>
      <button className="favorites">
        <img src={ emptyFavorite } alt="" />
      </button>

      <img src={ dish } alt="imagem do prato" />

      <p>Salada Ravanello</p>

      <span>R$ 49,97</span>

      <div>
        <div className="quantity">
          <button>
            <img src={ decrease } alt="" />
          </button>

          <input type="number" min="1" max="99" defaultValue={ 1 } />

          <button>
            <img src={ increase } alt="" />
          </button>
        </div>

        <button type="button">
          incluir
        </button>
      </div>
    </DishCardSC>
  )
}