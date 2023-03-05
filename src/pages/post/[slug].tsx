import HeaderBlog from "@/components/Artigo/HeaderBlog"
import Image from "next/image"
import * as Styled from '../../styles/post'
import Link from "next/link"
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR"
import { request } from "../../lib/datocms";
import { StructuredText } from "react-datocms";


const GET_POST = `query GetPost($slugPost: String) {
  post(filter: { slug: { eq: $slugPost } }) {
    titulo
    textoprevio
    textoprincipal{
      value
    }
    slug
    imagem {
      url
    }
    autor
    data
  }
}`;

export default function Post({post}: any){

  return(
    <>
    <HeaderBlog/>
    <Styled.PostSection>

<Link href={'/artigos'}>Voltar</Link>
     <Image
      src={post.post.imagem.url}
      alt='imagem do post'
      width={500}
      height={400}
      style={{ objectFit: "cover"}}
      />
      <Styled.PostText>
        <h1>{post.post.titulo}</h1> 
        <div className='wrapperAuthor'>
          <span className='author'>{post.post.autor}</span>
          <span>{format(new Date(post.post.data), "dd 'de' MMM 'de' yyyy", {locale: ptBR})}</span>
        </div>       
        <StructuredText data={post.post.textoprincipal}/>
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

export async function getStaticPaths() {
  const data = await request({
    query: `{ allPosts{ slug } }`,
  });

  console.log(`data`, data);

  const paths = data.allPosts.map((post:any) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: 'blocking' };
}




