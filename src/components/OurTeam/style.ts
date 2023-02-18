import styled from "styled-components";

export const OurTeamSection = styled.section`
width: 100%;
background-color: #374267;
margin-top: 100px;
padding: 100px 200px;

@media (max-width: 1300px) {
  padding: 2%;
  text-align: center;
  }
`

export const TitleBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
line-height: 2;
color: white;
`

export const ContainerCards = styled.div`
display: flex;
width: 100%;
justify-content: center;
@media (max-width: 1300px) {
  text-align: center;
  flex-wrap: wrap;
  }
`

export const Card = styled.div`
width: 300px;
height: 500px;
background-color: white;
border-radius: 0 20px 20px 0;
margin: 20px;
display: flex;
flex-direction: column;
align-items: center;
line-height: 2;

h5{
  color: black;
  font-weight: 700;
}

h3{
  color: #374267
}

p{
  padding: 10px 20px;
  color: black;
  line-height: 1.5;
}

img{
  margin: 20px;
  border-radius: 0 20px 20px 0;
  width: auto;
}
`