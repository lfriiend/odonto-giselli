import * as Styled from './style'
import Image from 'next/image'
import React from 'react'

export default function OurTeam(data:any){

  let list = data.props.allNossotimes

  return(
    <Styled.OurTeamSection id='especialistas' data-aos="fade-up">
      <Styled.TitleBox>
        <h2>Nosso time</h2>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
      </Styled.TitleBox>
      <Styled.ContainerCards>
        
    {React.Children.toArray(
    list.map(function(item:any){
    return(
      <Styled.Card>
      <Image
      src={item.foto.url}
      alt=''
      width={250}
      height={0}
      style={{  height: 'auto' }}
      />
      <h5>{item.especialidade}</h5>
      <h3>{item.nome}</h3>
      <p>{item.descricao}</p>
    </Styled.Card>
    )
  }))}
      </Styled.ContainerCards>
    </Styled.OurTeamSection>
  )
}