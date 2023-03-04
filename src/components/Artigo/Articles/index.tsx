import * as Styled from './style'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR"

export default function Articles(data:any){
  
  let list = data.props.allPosts

  console.log(list,'list articles')

  return(
    <Styled.BlogSection>
      <Styled.MainBlogCard>
      <Link href={`/artigos/post/${list[0].slug}`}>
      <Image
      src={list[0].imagem.url}
      alt=''
      width={500}
      height={400}
      style={{ objectFit: "cover"}}
      />
      <div>
        <h1>{list[0].titulo}</h1>        
        <p> {list[0].texto}</p>
        <div className='wrapperAuthor'>
          <span className='author'>{list[0].autor}</span>
          <span>{format(new Date(list[0].data), "dd 'de' MMM 'de' yyyy", {locale: ptBR})}</span>
        </div>
      </div>
      </Link>
    </Styled.MainBlogCard>
    <Styled.PostCards>
     {
     React.Children.toArray(
    list.map(function(item:any, index:any){
    if(index != 0){
      return(
      
        <Styled.BlogCard>
          <Link href={`/artigos/post/${item.slug}`}>
        <Image
        src={item.imagem.url}
        alt=''
        width={400}
        height={300}
        style={{ objectFit: "cover"}}
        />
        <div className='wrapperText'>
          <h1>{item.titulo}</h1>        
          <p> {item.texto}</p>
          <div className='wrapperAuthor'>
            <span className='author'>{item.autor}</span>
            <span>{format(new Date(item.data), "dd 'de' MMM 'de' yyyy", {locale: ptBR})}</span>
          </div>
        </div>
        </Link>
      </Styled.BlogCard>
      )
    }
  }))} 
   </Styled.PostCards>
    <Styled.PostCards>

    </Styled.PostCards>
    </Styled.BlogSection>
  )
}