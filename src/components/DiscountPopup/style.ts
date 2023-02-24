import styled from 'styled-components';

export const Popup = styled.div`
  position: fixed;
  top: calc(50% - 200px);
  right: calc(50% - 300px);
  width: 600px;
  height: 400px;
  background-color: #fff;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  border-radius: 20px;
  box-shadow: -4px -4px 8px rgba(0, 0, 0, 0.3);

  @media (max-width: 600px){
  width: 80%;
  height: auto;
  top: calc(50% - 200px);
  right: 10%;
}
`;

export const PopupContainer = styled.div`
display: flex;
height: 100%;
flex-direction: column;
gap: 20px;
align-items: center;


img{
  padding-top: 40px;
}

span{
  padding-inline: 30px;
  text-align: center;
}

a{
  background: #374267;
  border: none;
  border-radius: 40px;
  margin-bottom: 60px;
  padding: 16px 32px;
  width: fit-content;
  color: white;
  font-size: 14px;
  font-weight: 700;
  gap: 16px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background 200ms;
  margin-top: 10px;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
  cursor: pointer;
  color: #374267;

`;

export const Message = styled.h2`
  font-size: 2rem;
  margin: 0;
  font-weight: 600;

  @media (max-width: 600px){
    text-align: center;
}
`;
