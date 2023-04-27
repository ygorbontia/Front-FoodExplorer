import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Menu } from '../pages/Menu';
import { DishDetails } from '../pages/DishDetails';
import { NewDish } from '../pages/NewDish';
import { EditDish } from '../pages/EditDish';

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Home admin /> } />
      <Route path="/menu" element={ <Menu admin /> } />
      <Route path="/dish/:id" element={ <DishDetails admin /> } />
      <Route path="/dish/:id/edit" element={ <EditDish admin /> } />
      <Route path="/new-dish" element={ <NewDish admin /> } />
    </Routes>
  )
}