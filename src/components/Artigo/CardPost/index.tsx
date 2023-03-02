import * as Styled from './style'
import Image from 'next/image'
import Tela from '../../../assets/images/Tela.png'
import Link from 'next/link'

export default function CardPost(props:any){

  let list = props.allPosts;

  console.log(list,'cardpost')
  return(
    <Styled.BlogCard>
    <Link href={"/post"}>
      <Image
      src={Tela}
      alt=''
      width={0}
      height={250}
      style={{width: 'auto'}}
      />
      <Styled.BlogText>
        <h1>Por que fazer harmonização facial?</h1>        
        <p> In eu pulvinar lorem. Fusce sagittis, metus vestibulum molestie pretium, justo ex lobortis ex, imperdiet malesuada metus diam id augue. Cras sed ipsum ac odio eleifend euismod vitae a mi. Ut in porta libero, vel tempus massa. Praesent tempor erat in pulvinar imperdiet.</p>
        <div className='wrapperAuthor'>
          <span className='author'>Dra. Giselli</span>
          <span>31 de janeiro de 2023</span>
        </div>
      </Styled.BlogText>
      </Link>
    </Styled.BlogCard>
    
  )
}