import * as Styled from './style'
import Face from '../../assets/images/face.png'
import Image from 'next/image'
import Catch from './Catch'

export default function MainContainer(){
  return(
    <>
    <Styled.MainSection>
        <Styled.Welcome>
          <h3>Bem-vindo</h3>
          <h1>Dra. Gilselli Alves</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed est at nisl rutrum vestibulum quis non lacus.</p>
          <button>orçamento</button>
        </Styled.Welcome>
        <Styled.Teste>
    <Image 
    src={Face}
    alt=''
    width={1000}
    />
        </Styled.Teste>
    </Styled.MainSection>
    <Catch/>
    </>
  )
}