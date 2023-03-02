import styled from "styled-components";

export const BlogSection = styled.section`
display: flex;
flex-direction: column;
width: 100%;
justify-content: center;
align-items: center;
`

export const MainBlogCard = styled.div`
display: flex;
flex-direction: row;
line-height: 2;
padding-bottom: 80px;

a{
  display: flex;
  align-items: center;
}

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
  color: #374267;
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
width: 100%;
flex-direction: row;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`

export const BlogCard = styled.div`
display: flex;
flex-direction: column;
line-height: 2;
align-items: center;

img{
  border-radius: 20px;
}

p{
  max-width: 700px;
}

h1{
  font-size: 20px;
  max-width: 700px;
  padding-bottom: 20px;
  
}

a{
  margin: 0;
  padding: 0;
}

.author{
  font-weight: 700;
}

.wrapperAuthor{
  display: flex;
  flex-direction: column;
  padding-top: 10px;
}

.wrapperText{
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 10px;

h1{
  color: #374267;
  font-size: 25px;
}

  p{
    width: 400px;
  }
}
`

export const BlogText = styled.div`
max-width: 430px;
`