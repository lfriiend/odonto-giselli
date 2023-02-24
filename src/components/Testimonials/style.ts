import styled from "styled-components";

export const TestimonialsSection = styled.section`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding: 100px 200px;

h2{
  padding-bottom: 20px;
}

@media (max-width: 1300px){
  flex-direction: column;
  padding: 0;
  padding-top: 20px;
}
`

export const ContainerCards = styled.div`
width: 100%;

`

export const Card = styled.div`

padding: 20px;
border-radius: 20px;
width: 300px;
min-height: 350px;
height: auto;
background-color: #374267;
line-height: 2;
color: white;
margin: 0 auto;
position: relative;

a:before{
  content: "";
  margin-top: -65px;
  width: 260px;
  position: absolute;
  display: flex;
  align-items: center;
  border-bottom: 3px solid #44517E;
}

a{
  background: #44517E;
  border: none;
  border-radius: 40px;
  padding: 8px 16px;
  width: fit-content;
  color: white;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  gap: 16px;
  text-decoration: none;
  transition: background 200ms;
  margin: 20px auto 0;
  align-items: center;
  position: absolute;
  bottom: 3%;
  left: 0;
  right: 0;
}

a:hover{
  cursor: pointer;
  filter: brightness(0.9);
}

`