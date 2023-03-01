import styled from "styled-components";

export const BlogCard = styled.div`
display: flex;
flex-direction: column;
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
  font-size: 20px;
  max-width: 700px;
  padding-bottom: 20px;
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

export const BlogText = styled.div`
max-width: 430px;
`