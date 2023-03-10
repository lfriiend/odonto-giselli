import * as Styled from './style'
import Image from 'next/image'
import whats from '../../assets/svg/whatsapp.svg'
import Link from 'next/link'
import React from 'react'

export default function OurServices(data:any){

  let list = data.props.allServicos

  return(
    <Styled.ServicesSection id='servicos' data-aos="fade-right">     
    {React.Children.toArray(
    list.map(function(item:any){
    return(
      <>
      <Image
      className='image'
      src={item.foto.url}
      alt='banner com mulher sorridente'
      width={600}
      height={0}
      style={{  height: 'auto' }}
      />
      <Styled.BoxText>
        <h2>{item.titulo}</h2>
        <p>{item.texto}</p>
        <Link href="/artigos">
        ACESSE NOSSOS ARTIGOS</Link>
      </Styled.BoxText>
      </>
      )
  }))}
    </Styled.ServicesSection>
  )
}