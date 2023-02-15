import styled from "styled-components";

export const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
line-height: 2;
max-width: 300px;
text-align: center;
padding: 20px;
margin: 10px;
background-color: #374267;
border-radius: 20px;
color: white;

`

export const CatchSection = styled.section`
width: 100%;
padding: 20px 200px;
display: flex;
flex-direction: row;
justify-content: space-between;

@media (max-width: 1300px) {
  flex-wrap: wrap;
  padding: 0;
  justify-content: center;
}
`