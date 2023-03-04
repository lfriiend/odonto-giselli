import HeaderBlog from "@/components/Artigo/HeaderBlog"
import Image from "next/image"
import * as Styled from '../../styles/post'
import Link from "next/link"

import { request } from "../../lib/datocms";

// const GET_POST = `{
//   query GetPost($slugPost: String){
//     post(where: { slug: $slugPost}){
//     titulo
//     texto
//     slug
//     imagem {
//       url
//     }
//     autor
//     data
//     }
//   }
// }`;

const GET_POST = `query GetPost($slugPost: String) {
  post(filter: { slug: { eq: $slugPost } }) {
    titulo
    texto
    slug
    imagem {
      url
    }
    autor
    data
  }
}`;


interface PostProps{
  post: {
    titulo: string;
    texto: string;
    imagem: {
      url: string;
    };
    autor: string;
    data: string;
  }
}

export default function Post({post}: PostProps){

  return(
    <>
    <HeaderBlog/>
    <Styled.PostSection>

<Link href={'/artigos'}>Voltar</Link>
     <Image
      src={post.imagem.url}
      alt=''
      width={200}
      height={200}
      style={{ borderRadius: '20px'}}
      />
      <Styled.PostText>
        <h1>{post.titulo}</h1> 
        <div className='wrapperAuthor'>
          <span className='author'>{post.autor}</span>
          <span>{post.data}</span>
        </div>       
        <p> {post.texto}</p>  
      </Styled.PostText>
      </Styled.PostSection>
    </>
  )
}

export async function getStaticProps({ params }:any) {
  const { slug } = params;

  const post = await request({
    query: GET_POST,
    variables: { slugPost: slug },
  });

  return {
    props: { post },
  };
}

// export async function getStaticPaths() {
//   const data = await request({
//     query: `{ allPosts { slug } }`,
//   });

//   const paths = data.allPosts.map((post:any) => ({
//     params: { slug: post.slug },
//   }));

//   return { paths, fallback: 'blocking' };
// }

export async function getStaticPaths() {
  const data = await request({
    query: `{
      allPosts(filter: { isPublished: { eq: true } }) {
        slug
      }
    }`,
  });

  const paths = data.allPosts.map((post: any) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: "blocking" };
}




