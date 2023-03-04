import * as Styled from './style'
import Image from 'next/image'
import Tela from '../../assets/images/tela.png'

export default function About(){
  return(
    <Styled.AboutSection id="sobre" data-aos="fade-up">
    <Styled.AboutText>
    <h2>Sobre nós</h2>
    <p>Atuando na Odontologia desde 2008, temos como objetivo cuidar da saúde bucal e autoestima, de forma individualizada, com transparência, ética, profissionalismo e qualidade.   Dra. Giselli Alves, CROSP 96.921, é graduada pela Universidade Federal de Alfenas - Unifal-MG, desde 2008, é especialista em Ortodontia pela Associação Nacional de Estudos Odontológicos, desde 2012, e especialista em Harmonização Orofacial pela Instituto Lucila Largura, desde 2021. </p>
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