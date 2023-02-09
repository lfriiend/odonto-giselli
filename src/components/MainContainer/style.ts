import styled from "styled-components";

export const MainSection = styled.section`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
padding-left: 200px;
padding-top: 20px;
align-items: center;
`

export const Welcome = styled.div`
max-width: 500px;
line-height: 2;
button {
  background: #374267;
  border: none;
  border-radius: 40px;
  margin-bottom: 60px;
  padding: 16px 32px;
  width: fit-content;
  color: white;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  text-decoration: none;
  transition: background 200ms;
  margin-top: 10px;
}

button:hover {
  cursor: pointer;
  filter: brightness(0.9);
}
`

export const Teste = styled.div`

img{
border-radius: 500px 0 0 500px;
}
`