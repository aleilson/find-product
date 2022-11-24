import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ProductProps, SearchProducts } from './components/SearchProducts';
import { ShowDetailsProduct } from './components/ShowDetailsProduct';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

function App() {
  const [productDetails, setProductDetails] = useState<ProductProps>();

  function onGetProductDetails(product: ProductProps) {
    return setProductDetails(product);
  }

  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
          <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <SearchProducts handleGetProductDetails={onGetProductDetails}  />

            { productDetails && <ShowDetailsProduct productDetails={productDetails} /> }
          </div>
          <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}

export default App;
