import * as Styled from './style'
import Image from 'next/image'
import Tela from '../../assets/images/tela.png'

export default function About(){
  return(
    <Styled.AboutSection id="sobre" data-aos="fade-up">
    <Styled.AboutText>
    <h2>Sobre nós</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in rhoncus lectus. Phasellus orci sem, commodo semper lacus sagittis, varius vestibulum lectus. Nulla ultrices quam ac pulvinar tempor. Vestibulum congue facilisis nibh at fermentum. Quisque accumsan accumsan sem, vel feugiat tellus pellentesque et. Mauris efficitur ex ut nisl dapibus, ac finibus metus lacinia. Vivamus condimentum a odio id tempor. Nullam quis metus nunc. Mauris vel nulla arcu. </p>
    </Styled.AboutText>
    <Styled.ImageContainer>
    <Image
    loading='lazy'
    src={Tela}
    alt=''
    width={800}
    priority={false}
    />
    </Styled.ImageContainer>
    </Styled.AboutSection>
  )
}