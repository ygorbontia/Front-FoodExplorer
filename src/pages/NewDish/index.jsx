import { NewDishSC } from './style';

import { Brand } from '../../components/Brand';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Ingredients } from '../../components/Ingredients';
import { Footer } from '../../components/Footer';

export function NewDish() {
  return (
    <NewDishSC>
      <header>
        <nav>
          <button type="button">
            <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H23C23.5523 0 24 0.447715 24 1C24 1.55228 23.5523 2 23 2H1C0.447715 2 0 1.55228 0 1ZM0 9C0 8.44772 0.447715 8 1 8H23C23.5523 8 24 8.44772 24 9C24 9.55229 23.5523 10 23 10H1C0.447715 10 0 9.55229 0 9ZM0 17C0 16.4477 0.447715 16 1 16H23C23.5523 16 24 16.4477 24 17C24 17.5523 23.5523 18 23 18H1C0.447715 18 0 17.5523 0 17Z" fill="white"/>
            </svg>
          </button>

          <a href="#">
            <Brand />
            <p>admin</p>
          </a>
        </nav>
      </header>

      <main>
        <a href="#">
          <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.27586 0.338155C8.54509 0.607387 8.54509 1.0439 8.27586 1.31313L1.86922 7.71977L8.27586 14.1264C8.54509 14.3956 8.54509 14.8321 8.27586 15.1014C8.00663 15.3706 7.57011 15.3706 7.30088 15.1014L0.406758 8.20726C0.137526 7.93802 0.137526 7.50151 0.406758 7.23228L7.30088 0.338155C7.57011 0.0689224 8.00663 0.0689224 8.27586 0.338155Z" fill="white"/>
          </svg>
          
          voltar
        </a>

        <h1>Novo prato</h1>

        <div className="image item">
          <p>Imagem do prato</p>

          <label htmlFor="dish-image">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.2929 0.292893C11.6834 -0.0976311 12.3166 -0.0976311 12.7071 0.292893L17.9571 5.54289C18.3476 5.93342 18.3476 6.56658 17.9571 6.95711C17.5666 7.34763 16.9334 7.34763 16.5429 6.95711L12 2.41421L7.45711 6.95711C7.06658 7.34763 6.43342 7.34763 6.04289 6.95711C5.65237 6.56658 5.65237 5.93342 6.04289 5.54289L11.2929 0.292893Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M12 1.49012e-08C12.5523 1.49012e-08 13 0.447715 13 1V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V1C11 0.447715 11.4477 1.49012e-08 12 1.49012e-08Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M1 14C1.55228 14 2 14.4477 2 15V22H22V15C22 14.4477 22.4477 14 23 14C23.5523 14 24 14.4477 24 15V22C24 22.5304 23.7893 23.0391 23.4142 23.4142C23.0391 23.7893 22.5304 24 22 24H2C1.46957 24 0.960861 23.7893 0.585787 23.4142C0.210714 23.0391 0 22.5304 0 22V15C0 14.4477 0.447715 14 1 14Z" fill="white"/>
            </svg>

            Selecione imagem
          </label>

            <input type="file" name="image" id="dish-image" />
        </div>
        
        <Input label="Nome" type="text" placeholder="Ex.: Salada Ceasar" />

        <div className="item">
          <label htmlFor="category">Categoria</label>

          <select name="category" id="category">
            <option value="refeicoes">Refeições</option>
            <option value="sobremesas">Sobremesas</option>
            <option value="bebidas">Bebidas</option>
          </select>
        </div>

        <div className="item">
          <p>Ingredientes</p>

          <div className="ingredients">
            <Ingredients isNew placeholder="Adicionar" />
            <Ingredients value="Pão Naan" />
          </div>
        </div>

        <Input label="Preço" type="number" min="0.00" step="1" placeholder="R$ 35.00" />

        <div className="item">
          <label htmlFor="description">Descrição</label>

          <textarea name="description" id="description" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
        </div>

        <Button title="Salvar alterações" />
      </main>
      
      <Footer />
    </NewDishSC>
  )
}