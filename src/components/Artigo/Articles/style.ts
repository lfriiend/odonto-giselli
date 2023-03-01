import styled from "styled-components";

export const BlogSection = styled.section`
display: flex;
flex-direction: column;
width: 100%;
justify-content: center;
align-items: center;
`

export const BlogCard = styled.div`
display: flex;
flex-direction: row;
line-height: 2;
padding-bottom: 40px;

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

export const PostCards = styled.div`
flex-direction: row;
display: flex;
flex-wrap: wrap;
`