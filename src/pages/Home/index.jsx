import { HomeSC, BannerSC } from './style';

import { useState, useEffect } from 'react';

import { api } from '../../services/api';

import { DishCard } from '../../components/DishCard';

import macarrons from '../../assets/macarrons.png';

import { Header } from '../../components/Header';
import { DishCategories } from '../../components/DishCategories';
import { Footer } from '../../components/Footer';

export function Home({ admin }) {
  const [ dishes, setDishes ] = useState([]);

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get("/dishes")

      setDishes(response.data);
    }

    /* 
      <DishCard admin={ admin } />
      <DishCard admin={ admin } />
      <DishCard admin={ admin } />
      <DishCard admin={ admin } />
    */

    fetchDishes();
  }, [])
  return (
    <HomeSC>
      <Header admin={ admin } />

      <BannerSC>
        <img src={ macarrons } alt="Imagem de macarrons coloridos" />

        <div>
          <h1>Sabores inigualáveis</h1>

          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </BannerSC>

      <main>
        <DishCategories admin={ admin } title="Refeições">
          {
            dishes.filter(dish => dish.category == 'refeicoes').length > 0 && (
              dishes.map(dish => 
                <DishCard 
                  key={ String(dish.id) }
                  admin={ admin } 
                  name={ dish.name }
                  image={ dish.image }
                  price={ dish.price }
                  description={ dish.description }
                />
              )
            )
          }
        </DishCategories>

        {
          dishes.filter(dish => dish.category == 'sobremesas').length > 0 && (
          <DishCategories admin={ admin } title="Sobremesas">
            {
              dishes.map(dish => 
                <DishCard 
                  key={ String(dish.id) }
                  admin={ admin } 
                  name={ dish.name }
                  image={ dish.image }
                  price={ dish.price }
                  description={ dish.description }
                />
              )
            }
          </DishCategories>
          )
        }
        
        {
          dishes.filter(dish => dish.category == 'bebidas').length > 0 && (
          <DishCategories admin={ admin } title="Bebidas">
            {
              dishes.map(dish => 
                <DishCard 
                  key={ String(dish.id) }
                  admin={ admin } 
                  name={ dish.name }
                  image={ dish.image }
                  price={ dish.price }
                  description={ dish.description }
                />
              )
            }
          </DishCategories>
          )
        }
      </main>

      <Footer />
    </HomeSC>
  )
}