import { HomeSC, BannerSC } from './style';

import macarrons from '../../assets/macarrons.png';

import { Header } from '../../components/Header';
import { DishCategories } from '../../components/DishCategories';
import { Footer } from '../../components/Footer';

export function Home() {
  return (
    <HomeSC>
      <Header />

      <BannerSC>
        <img src={ macarrons } alt="Imagem de macarrons coloridos" />

        <div>
          <h1>Sabores inigualáveis</h1>

          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </BannerSC>

      <main>
        <DishCategories title="Refeições" />

        <DishCategories title="Sobremesas" />
        
        <DishCategories title="Bebidas" />
      </main>

      <Footer />
    </HomeSC>
  )
}