import styled from "styled-components";

export const PostSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
justify-content: center;
padding-inline: 100px;

a{
  color: #374267;
  font-weight: 600;
  padding-bottom: 20px;
}
`

export const PostText = styled.div`
padding-top: 40px;
padding-inline: 200px;

h1{
  font-size: 32px;
  color: #374267;
  padding-bottom: 10px;
}

.wrapperAuthor{
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
}

.author{
  font-weight: 700;
}

`