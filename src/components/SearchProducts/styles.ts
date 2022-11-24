import styled from 'styled-components';

export const SearchContainer = styled.div`
  width: 100%;
  max-width: 500px;

  div {
    display: flex;
    align-items: center;
    border: 1px solid ${(props) => props.theme['base-radius']};
    border-radius: 4px;
    padding: 6px;
    margin: 10px 0;

    svg {
      margin-right: 6px;
      color: ${(props) => props.theme['base-text']};
    }

    input {
      border: none;
      width: 100%;
      outline: unset;
      color: ${(props) => props.theme['base-text']};
      background: ${(props) => props.theme.background};
    }

    > span {
      padding: 10px;
      font-size: 14px;
    }
  }

  button {
    width: 100%;
    display: flex;
    font-weight: bold;
    align-items: center;
    justify-content: end;
    background: transparent;
    border: none;
    color: ${(props) => props.theme['base-cyan']};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['base-cyan-hover']};
    }
  }
`;

export const ListProducts = styled.ul`
  border: 1px solid ${(props) => props.theme['base-radius']};
  border-radius: 4px;
  list-style: none;
  padding: 0;
  margin-top: 10px;

  li {
    padding: 6px;

    button {
      justify-content: flex-start;
      font-weight: 300;
      color: ${(props) => props.theme['base-text']};
      cursor: pointer;
    }

    &:hover {
      background: ${(props) => props.theme['base-cyan-hover']};

      button {
        color: ${(props) => props.theme['white']};
      }
    }
  }
`;