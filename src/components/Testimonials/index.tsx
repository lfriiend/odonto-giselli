import * as Styled from './style'
import Image from 'next/image'
import quote from '../../assets/svg/quotes.svg'
import insta from '../../assets/svg/instagram.svg'
import Link from 'next/link'

export default function Testimonials(data:any){

  console.log('teste',data.props.allDepoimentos[0].titulo)

  return(
    <Styled.TestimonialsSection id='depoimentos'>
      <div>
        <h2>O que nossos clientes dizem</h2>
      </div>
      <Styled.ContainerCards>
        <Styled.Card>
          <Image
           loading='lazy'
           src={quote}
           alt='quote'
           width={50}
          />
          <h4>{data.props.allDepoimentos[0].titulo}</h4>
          <p>{data.props.allDepoimentos[0].texto}</p>
          <Link href={data.props.allDepoimentos[0].instagram}><Image
           loading='lazy'
           src={insta}
           alt='instagram icon'
           width={20}
          /> RESULTADO</Link>
        </Styled.Card>
        <Styled.Card><Image
           loading='lazy'
           src={quote}
           alt='quote'
           width={50}
          />
          <h4>Lucas Sales</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie magna sit amet magna congue elementum.</p>
          <Link href=''><Image
           loading='lazy'
           src={insta}
           alt='instagram icon'
           width={20}
          /> RESULTADO</Link></Styled.Card>
        <Styled.Card><Image
           loading='lazy'
           src={quote}
           alt='quote'
           width={50}
          />
          <h4>Lucas Sales</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie magna sit amet magna congue elementum.</p>
          <Link href=''><Image
           loading='lazy'
           src={insta}
           alt='instagram icon'
           width={20}
          /> RESULTADO</Link></Styled.Card>
      </Styled.ContainerCards>
    </Styled.TestimonialsSection>
  )
}