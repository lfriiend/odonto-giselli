import styled from "styled-components";

export const MainSection = styled.section`
width: 100%;
height: auto;
display: flex;
flex-direction: row;
justify-content: space-between;
padding-left: 200px;
padding-top: 20px;
align-items: center;

@media (max-width: 1300px) {
  flex-direction: column;
  text-align: center;
  padding: 0;
  padding-top: 100px
  }


`

export const Welcome = styled.div`
max-width: 500px;
line-height: 2;
a {
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

  @media (max-width: 1300px) {
    margin: 0 auto;
  }
}

a:hover {
  cursor: pointer;
  filter: brightness(0.9);
}
`

export const ImageContainer = styled.div`

img{
border-radius: 500px 0 0 500px;
@media (max-width: 1300px) {
  padding-top: 10px;
  width: 100%;
  height: auto;
  }
}

@media (max-width: 1300px) {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  }
`