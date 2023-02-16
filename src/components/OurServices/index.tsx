import * as Styled from './style'
import Image from 'next/image'
import service from '../../assets/images/service.png'
import whats from '../../assets/svg/whatsapp.svg'
import Link from 'next/link'

export default function OurServices(){
  return(
    <Styled.ServicesSection id='servicos'>
      <Image
      className='image'
      src={service}
      alt='banner com mulher sorridente'
      width={1000}
      />
      <Styled.BoxText>
        <h2>Por que fazer harmonização facial?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor erat eu rhoncus aliquet. Nullam fermentum venenatis erat, eu facilisis velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent molestie tincidunt dui dictum maximus. Pellentesque id lorem ut mi imperdiet porttitor vel ac erat. Nulla arcu felis, hendrerit sit amet rutrum sit amet, bibendum ullamcorper elit. Phasellus vel lectus sed nibh porta consectetur</p>
        <Link href="">
          <Image
          src={whats}
          alt=''
          width={20}
          />
        saiba mais</Link>
      </Styled.BoxText>
    </Styled.ServicesSection>
  )
}