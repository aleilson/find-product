import { ProductProps } from "../SearchProducts";
import { ShowDetailsContainer, ProductInfo } from "./styles";

interface showDetailsProductProps {
  productDetails: ProductProps;
}

export function ShowDetailsProduct({ productDetails }: showDetailsProductProps) {
  
  return (
    <ShowDetailsContainer>
      <strong>Product Details</strong>

      <span>{productDetails.title}</span>

      <figure>
        <img src={productDetails.images[0]} alt={productDetails.title} />
      </figure>

      <ProductInfo>
        <div>
          <span>Price</span>
          <p>{new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
              }).format(productDetails.price)}
          </p>
        </div>

        <div>
          <span>Discount Percentage</span>
          <p>{productDetails.discountPercentage}%</p>
        </div>
        
        <div>
          <span>Brand</span>
          <p>{productDetails.brand}</p>
        </div>

        <div>
          <span>Category</span>
          <p>{productDetails.category}</p>
        </div>

        <div>
          <span>Description</span>
          <p>{productDetails.description}</p>
        </div>
      </ProductInfo>
    </ShowDetailsContainer>
  )
}