import { BrandSC } from './style';

import icon from '../../assets/Brand-icon.svg';

export function Brand() {
  return (
    <BrandSC>
      <img src={ icon } alt="Ícone logotipo Food Explorer" />

      <h1>food explorer</h1>
    </BrandSC>
  )
}