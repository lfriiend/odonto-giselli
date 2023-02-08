import React from 'react'
import * as Styled from './style'
import { faTooth } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Catch(){

  let list = [
    {
      title: "Cirurgia",
      image: "teste",
      description: 'teste'
    },
    {
      title: "Cirurgia",
      image: "teste",
      description: 'teste'
    },
    {
      title: "Cirurgia",
      image: "teste",
      description: 'teste'
    },
    {
      title: "Cirurgia",
      image: "teste",
      description: 'teste'
    }
  ]
  return(
    <Styled.CatchSection>
    {
      React.Children.toArray(
        list.map(item =>{
          return(
            <Styled.Card>
              <FontAwesomeIcon icon={faTooth}/>
              <h3>{item.title}</h3>
            </Styled.Card>
          )
        })
      )
    }
    </Styled.CatchSection>
  )
}