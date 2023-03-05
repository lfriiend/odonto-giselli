import styled from "styled-components";

export const AboutSection = styled.section`
width: 100%;
background-color: #EBE0D6;
display: flex;
padding-left: 200px;



@media (max-width: 1300px){
  flex-direction: column;
  justify-content: center;
  padding: 0;
  padding-top: 20px;
}
`

export const AboutText = styled.div`
padding: 100px 100px 0 0;
display: flex;
flex-direction: column;
line-height: 2;
h2{
  color: #374267;
}

@media (max-width: 1300px){
  flex-direction: column;
  justify-content: center;
  padding: 2%;
  h2{
    text-align: center;
    }
}
`

export const ImageContainer = styled.div`
img{
@media (max-width: 1300px){
  width: 100%;
  height: auto;
}
}
`