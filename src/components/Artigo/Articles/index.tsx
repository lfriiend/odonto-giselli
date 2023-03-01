import * as Styled from './style'
import Image from 'next/image'
import Tela from '../../../assets/images/tela.png'
import CardPost from '../CardPost'

export default function Articles(data:any){
  
  console.log(data.props.allPosts,'teste articles')

  return(
    <Styled.BlogSection>
    <Styled.BlogCard>
      <Image
      src={Tela}
      alt=''
      width={0}
      height={300}
      style={{width: 'auto'}}
      />
      <div>
        <h1>Por que fazer harmonização facial?</h1>        
        <p> In eu pulvinar lorem. Fusce sagittis, metus vestibulum molestie pretium, justo ex lobortis ex, imperdiet malesuada metus diam id augue. Cras sed ipsum ac odio eleifend euismod vitae a mi. Ut in porta libero, vel tempus massa. Praesent tempor erat in pulvinar imperdiet.</p>
        <div className='wrapperAuthor'>
          <span className='author'>Dra. Giselli</span>
          <span>31 de janeiro de 2023</span>
        </div>
      </div>
    </Styled.BlogCard>
    <Styled.PostCards>
      {/* <CardPost allPosts={data.props.allPosts}/> */}
      {/* <CardPost allPosts={props.allPosts}/> */}
      <CardPost/>
    </Styled.PostCards>
    </Styled.BlogSection>
  )
}