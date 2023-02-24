import styled from "styled-components";

export const BlogSection = styled.section`
display: flex;
width: 100%;
justify-content: center;
padding-inline: 100px;
`

export const BlogCard = styled.div`
display: flex;
flex-direction: row;
line-height: 2;
align-items: center;

img{
  border-radius: 20px;
  margin-right: 25px;
}

p{
  max-width: 700px;
}

h1{
  font-size: 32px;
  max-width: 700px;
}

.author{
  font-weight: 700;
}

.wrapperAuthor{
  display: flex;
  flex-direction: column;
  padding-top: 10px;
}
`