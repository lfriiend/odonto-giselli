import * as Styled from './style'
import Face from '../../assets/images/face.png'
import Image from 'next/image'
import Catch from './Catch'
import Whatsapp from '../../assets/svg/whatsapp.svg'

export default function MainContainer(){
  return(
    <>
    <Styled.MainSection>
        <Styled.Welcome>
          <h4>DRA. GISELLI ALVES 🦷</h4>
          <h1>ODONTOLOGIA & HARMONIZAÇÃO FACIAL</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed est at nisl rutrum vestibulum quis non lacus.</p>
          <button>
            <Image
            loading='lazy'
            src={Whatsapp}
            alt=''
            width={20}
            />
            faça seu orçamento
            </button>
        </Styled.Welcome>
        <Styled.ImageContainer>
    <Image 
    loading='lazy'
    src={Face}
    alt=''
    width={800}
    />
        </Styled.ImageContainer>
    </Styled.MainSection>
    <Catch/>
    </>
  )
}