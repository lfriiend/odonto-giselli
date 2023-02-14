import styled from "styled-components";

export const ServicesSection = styled.section`
width: 100%;
height: auto;
display: flex;
flex-direction: row;
justify-content: space-between;
padding-right: 200px;
padding-top: 20px;
align-items: center;

img{
border-radius: 0 500px 500px 0;
margin-right: 100px;
}
`

export const BoxText = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
line-height: 2;

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
  
img{
margin: 0;
}
}
`