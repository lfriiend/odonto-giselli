import React from 'react'
import * as Styled from './style'
import Image from 'next/image'
import Tooth from '../../../assets/svg/tooth-solid.svg'

export default function Catch(){

  let list = [
    {
      title: "Cirurgia",
      image: "teste",
      description: 'O implante dentário é o tratamento ideal para repor um ou mais dentes naturais que você perdeu.'
    },
    {
      title: "Cirurgia",
      image: "teste",
      description: 'O implante dentário é o tratamento ideal para repor um ou mais dentes naturais que você perdeu'
    },
    {
      title: "Cirurgia",
      image: "teste",
      description: 'O implante dentário é o tratamento ideal para repor um ou mais dentes naturais que você perdeu'
    },
    {
      title: "Cirurgia",
      image: "teste",
      description: 'O implante dentário é o tratamento ideal para repor um ou mais dentes naturais que você perdeu'
    }
  ]
  return(
    <Styled.CatchSection>
      
      
    {
      React.Children.toArray(
        list.map(item =>{
          return(
            <Styled.Card>
              <Image
              src={Tooth}
              alt=''
              width={60}
              />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Styled.Card>
          )
        })
      )
    }
    </Styled.CatchSection>
  )
}