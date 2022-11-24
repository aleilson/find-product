import { ArrowRight, MagnifyingGlass } from 'phosphor-react';
import { useCallback, useEffect, useState } from 'react';
import { api, getProducts } from '../../utils/api';
import { SearchContainer, ListProducts } from './styles';

export interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface SearchProductsProps {
  handleGetProductDetails: (product: ProductProps) => void;
}

export function SearchProducts({ handleGetProductDetails }: SearchProductsProps) {
  const [products, setProducts] = useState<ProductProps[] | undefined>([]);
  const [searchProduct, setSearchProduct] = useState('');

  const handleChangeListProducts = useCallback(async () => {
    if (searchProduct) {
      const response = await api.get(`?q=${searchProduct}`);

      setProducts(response.data.products);
    } else {
      getProducts().then((response: ProductProps[])=> {
        return setProducts(response);
      });
    }
  }, [searchProduct]);

  useEffect(() => {
    handleChangeListProducts()
  }, [handleChangeListProducts]);

  return (
    <SearchContainer>
      <section>
        <strong>Product name</strong>
          
          <div>
            <MagnifyingGlass size={16} />
            <input 
              type="text" 
              placeholder='Search....'
              value={searchProduct}
              onChange={(event) => {setSearchProduct(event.target.value)}}
            />
          </div>

          <button>
            Add to my list
            <ArrowRight size={16} />
          </button>
      </section>

      {products && products?.length === 0 
        ? (
          <div>
           <span>Couldn't find any products with the name <strong>{searchProduct}</strong></span>
          </div>
        ) : (
          <ListProducts>
            {products && products?.map((product: ProductProps) => {
              return (
                <li key={product.id}>
                  <button
                    onClick={() => handleGetProductDetails(product)}
                  >
                    {product.title}
                  </button>
                </li>
              )
            })}
          </ListProducts>
        )
      }
    </SearchContainer>
  )
}