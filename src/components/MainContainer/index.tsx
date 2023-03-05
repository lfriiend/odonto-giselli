import * as Styled from './style'
import Face from '../../assets/images/face.png'
import Image from 'next/image'
import Catch from './Catch'
import Whatsapp from '../../assets/svg/whatsapp.svg'
import 'aos/dist/aos.css'

export default function MainContainer(data:any){

  return(
    <>
    <Styled.MainSection id='home'>
        <Styled.Welcome  data-aos="fade-right">
          <h4>DRA. GISELLI ALVES 🦷</h4>
          <h1>ODONTOLOGIA & HARMONIZAÇÃO FACIAL</h1>
          <p>Especialista em cuidar do seu sorriso e da sua autoestima.</p>
          <button>
            <Image
            loading='lazy'
            src={Whatsapp}
            alt='Whatsapp icon'
            width={20}
            />
            faça seu orçamento
            </button>
        </Styled.Welcome>
        <Styled.ImageContainer data-aos="fade-left">
    <Image 
    src={Face}
    alt='banner da logo com uma mulher ruiva sorrindo'
    width={600}
    priority={true}
    />
        </Styled.ImageContainer>
    </Styled.MainSection>
    <Catch allCardshomes={data.props.allCardshomes}/>
    </>
  )
}