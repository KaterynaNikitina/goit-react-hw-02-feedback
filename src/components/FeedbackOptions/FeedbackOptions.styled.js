import styled from 'styled-components';

export const ButtonsBlock = styled.ul`
  display: flex;
  flex-direction: wrap;
  gap: 20px;
  padding-left: 8px;
  margin-bottom: 16px;

`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
  
    padding-left: 12px;
    padding-right: 12px;
    
    border: none;
    border-radius: 4px;
  
    font-family: inherit;
    font-size: 20px;
    text-transform: capitalize;
  
    cursor: pointer;
  
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
      &:hover {
        background-color: #2196f3;
        color: #fff;
  
}
    `

