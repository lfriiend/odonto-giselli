import HeaderBlog from "@/components/Artigo/HeaderBlog"
import Image from "next/image"
import * as Styled from '../../styles/post'
import Link from "next/link"
import { request } from "../../lib/datocms";

// const ARTIGOS_QUERY = `{

//   allPosts {
//     texto
//     slug
//     autor
//     titulo
//     imagem {
//       url
//     }
// }`;

// export async function getStaticProps() {
//   const data = await request({
//     query: ARTIGOS_QUERY
//   });
//   return {
//     props: { data },
//     revalidate: 10
//   };
// }


export default function Post(props:any){
  const {data} = props

  return(
    <>
    <HeaderBlog/>
    <Styled.PostSection>

<Link href={'/artigos'}>Voltar</Link>
     <Image
      src={''}
      alt=''
      width={0}
      height={0}
      style={{width: '50%',height: 'auto', borderRadius: '20px'}}
      />
      <Styled.PostText>
        <h1>Por que fazer harmonização facial?</h1> 
        <div className='wrapperAuthor'>
          <span className='author'>Dra. Giselli</span>
          <span>31 de janeiro de 2023</span>
        </div>       
        <p> In eu pulvinar lorem. Fusce sagittis, metus vestibulum molestie pretium, justo ex lobortis ex, imperdiet malesuada metus diam id augue. Cras sed ipsum ac odio eleifend euismod vitae a mi. Ut in porta libero, vel tempus massa. Praesent tempor erat in pulvinar imperdiet.</p>  
      </Styled.PostText>
      </Styled.PostSection>
    </>
  )
}