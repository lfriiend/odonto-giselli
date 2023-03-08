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

  return (
    <>
      <Head>
        <title>Dra. Giselli Alves</title>
        <meta name="description" content="Odontologia e Harmonização facil, especialista em cuidar do seu sorriso e da sua autoestima" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content='Dentista SBC, Harmonização facial SBC, Dentista São Bernardo do Campo, Harmonização facial São Bernardo do Campo, Dentista Rudge Ramos, Harmonização facial Rudge Ramos, Dra Giselli Alves'/>
      </Head>
      {/* <DiscountPopup props={data} /> */}
      <NavBar/>
      <MainContainer props={data}/>
      <About/>
      <Testimonials props={data}/>
      <OurServices props={data}/>
      <OurTeam props={data}/>
      <Footer/>
      
    </>
  )
}
