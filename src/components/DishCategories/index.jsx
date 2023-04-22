import { DishCategoriesSC } from './style';

import { DishCard } from '../DishCard';

export function DishCategories({ title }) {
  return (
    <DishCategoriesSC>
      <h2>{ title }</h2>

      <div className="slider">
        <DishCard />
        <DishCard />
        <DishCard />
      </div>
    </DishCategoriesSC>
  )
}