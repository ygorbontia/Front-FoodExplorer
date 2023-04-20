import { HomeSC, BannerSC } from './style';

import macarrons from '../../assets/macarrons.png';

import { Header } from '../../components/Header';

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

    </HomeSC>
  )
}