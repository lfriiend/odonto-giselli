import * as Styled from './style'
import Image from 'next/image'
import quote from '../../assets/svg/quotes.svg'
import insta from '../../assets/svg/instagram.svg'
import Link from 'next/link'
import React from 'react'

export default function Testimonials(data:any){
  
  let list = data.props.allDepoimentos

  return(
    <Styled.TestimonialsSection id='depoimentos'>
      <div>
        <h2>O que nossos clientes dizem</h2>
      </div>
      <Styled.ContainerCards>
  {React.Children.toArray(
    list.map(function(item:any){
    return(
    <Styled.Card>
          <Image
           loading='lazy'
           src={quote}
           alt='quote'
           width={50}
          />
          <h4>{item.titulo}</h4>
          <p>{item.texto}</p>
          <Link href={item.instagram}><Image
           loading='lazy'
           src={insta}
           alt='instagram icon'
           width={20}
          /> RESULTADO</Link>
    </Styled.Card>
    )
  }))}
      </Styled.ContainerCards>
    </Styled.TestimonialsSection>
  )
}