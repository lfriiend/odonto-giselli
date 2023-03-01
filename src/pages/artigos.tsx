import Articles from "@/components/Artigo/Articles";
import HeaderBlog from "@/components/Artigo/HeaderBlog";
import { request } from "../lib/datocms";

const ARTICLE_QUERY = `{

  allPosts {
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

export async function getStaticProps() {
  const data = await request({
    query: ARTICLE_QUERY
  });
  return {
    props: { data },
    revalidate: 10
  };
}

export default function Artigos(props:any){
  const {data} = props;
  
  return(
    <>
    <HeaderBlog/>
    <Articles props={data}/>
    </>
  )
}