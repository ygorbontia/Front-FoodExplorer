import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Menu } from '../pages/Menu';
import { DishDetails } from '../pages/DishDetails';
import { NewDish } from '../pages/NewDish';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/menu" element={ <Menu /> } />
      <Route path="/dish/:id" element={ <DishDetails /> } />
      <Route path="/new-dish" element={ <NewDish /> } />
    </Routes>
  )
}