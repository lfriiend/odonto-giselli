import React from 'react'
import * as Styled from './style'
import Image from 'next/image'

export default function Catch(props:any){

  let list = props.allCardshomes;
  console.log(list,'cardhome');
  return(
    <Styled.CatchSection data-aos="fade-up">
    {
      React.Children.toArray(
        list.map(function(item:any){
          return(
            <Styled.Card>
              <Image
              src={item.icone.url}
              alt=''
              width={100}
              height={0}
              style={{height: 'auto'}}
              />
              <h3>{item.titulo}</h3>
              <p>{item.descricao}</p>
            </Styled.Card>
          )
        })
      )
    }
    </Styled.CatchSection>
  )
}