import * as Styled from './style'
import flavia from '../../assets/images/flavia.jpg'
import luiza from '../../assets/images/luiza.jpg'
import daniel from '../../assets/images/daniel.jpg'
import Image from 'next/image'

export default function OurTeam(){
  return(
    <Styled.OurTeamSection>
      <Styled.TitleBox>
        <h1>Nosso time</h1>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
      </Styled.TitleBox>
      <Styled.ContainerCards>
        <Styled.Card>
          <Image
          src={flavia}
          alt=''
          width={250}
          />
          <h5>DENTISTA GERAL</h5>
          <h3>Dra. Flavia Samuel</h3>
          <p>Pós-graduada em Dentística Estética pela FUNDECTO-USP. Endodontia, Estética e Dentística.</p>
        </Styled.Card>
        <Styled.Card>
        <Image
          src={luiza}
          alt=''
          width={250}
          />
          <h5>DENTISTA GERAL</h5>
          <h3>Dra. Luiza Abreu</h3>
          <p>Pós-graduado em Cirurgia Bucal pela APCD-Osasco. Cirurgia Ortognática, Implantes e Cirurgias Orais Menores.</p>
        </Styled.Card>
        <Styled.Card>
        <Image
          src={daniel}
          alt=''
          width={250}
          />
          <h5>DENTISTA GERAL</h5>
          <h3>Dr. Daniel Abreul</h3>
          <p>Pós-graduado em Cirurgia Bucomaxilofacial pela Santa Casa de São Paulo. Cirurgia Ortognática, Implantes e Cirurgias Orais Menores.</p>
        </Styled.Card>
      </Styled.ContainerCards>
    </Styled.OurTeamSection>
  )
}