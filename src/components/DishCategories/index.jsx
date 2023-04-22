import { DishCategoriesSC } from './style';

export function DishCategories({ title, children }) {
  return (
    <DishCategoriesSC>
      <h2>{ title }</h2>

      <div className="slider">
        { children }
      </div>
    </DishCategoriesSC>
  )
}