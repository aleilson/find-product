import styled from 'styled-components';

export const ShowDetailsContainer = styled.div`
  width: 100%;
  max-width: 500px;

  border: 1px solid ${(props) => props.theme['base-radius']};
  border-radius: 4px;
  padding: 10px;

  strong {
    margin-bottom: 10px;
    display: block;
  }

  figure {    
    width: 100%;
    max-width: 300px;
    margin: 15px 0;
    
    img {
      width: 80%;
      height: auto;
      object-fit: cover;
      border-radius: 4px;
    }
  }
`;

export const ProductInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  border: 1px solid ${(props) => props.theme['base-radius']};
  border-radius: 4px;
  padding: 10px;

  div {

    span {
      font-weight: bold;
      margin: 6px 0;
      display: block;
    }

    p {
      font-size: 14px;
    }
  }
`;