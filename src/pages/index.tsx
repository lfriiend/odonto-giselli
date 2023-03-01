import About from '@/components/About';
import Articles from '@/components/Artigo/Articles';
import DiscountPopup from '@/components/DiscountPopup';
import Footer from '@/components/Footer';
import MainContainer from '@/components/MainContainer';
import NavBar from '@/components/NavBar'
import OurServices from '@/components/OurServices';
import OurTeam from '@/components/OurTeam';
import Testimonials from '@/components/Testimonials';
import Head from 'next/head'
import { request } from "../lib/datocms";
import Artigos from './artigos';

const HOMEPAGE_QUERY = `{

  allCardshomes {
    id
    descricao
    link
    titulo
    icone {
      url
    }
  }
  allDepoimentos {
    id
    instagram
    texto
    titulo
  }
  allNossotimes {
    descricao
    especialidade
    foto {
      url
      id
    }
    nome
    id
  }
  allServicos {
    titulo
    texto
    id
    foto {
      url
    }
  }
  allPopups {
    imagem {
      url
    }
    titulo
    texto
    link
  }
  allPosts {
    titulo
    texto
    slug
    imagem {
      url
    }
    autor
  }
}`;

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY
  });
  return {
    props: { data },
    revalidate: 10
  };
}

export default function Home(props:any) {
  const {data} = props;


  const teste = data.allPosts

  
  console.log(teste,'homeee')

  return (
    <>
      <Head>
        <title>Dra. Giselli Alves</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
      <DiscountPopup props={data} />
      <NavBar/>
      <MainContainer props={data}/>
      <About/>
      <Testimonials props={data}/>
      <OurServices props={data}/>
      <OurTeam props={data}/>
      <Footer/>
      <div style={{display: 'none'}}>
      <Articles props={data}/>
      </div>
    </>
  )
}
