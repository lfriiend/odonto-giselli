import styled from "styled-components";

export const Footer = styled.footer`
width: 100%;
display: flex;
line-height: 2;
padding: 100px 200px;
background-color: #EAE0D6;
justify-content: space-between;

svg{
  width: 20px;
  margin-right: 20px;
}

h4, h2{
  color: #374267;
  text-transform: uppercase;
  font-weight: 700;
}

.phone{
  display: flex;
  flex-direction: column;
}

.location{
  padding-top: 30px;
}

@media (max-width: 1300px) {
  flex-direction: column;
  text-align: center;
  padding: 2%;
  justify-content: center;
  }
`