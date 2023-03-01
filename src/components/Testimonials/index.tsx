import * as Styled from './style'
import Image from 'next/image'
import quote from '../../assets/svg/quotes.svg'
import insta from '../../assets/svg/instagram.svg'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Carousel from 'better-react-carousel'

export default function Testimonials(data:any){
  const [cols, setCols] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1300) {
        setCols(3);
      } else if (window.innerWidth >= 700) {
        setCols(2);
      } else {
        setCols(1);
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let list = data.props.allDepoimentos

  return(
    <Styled.TestimonialsSection id='depoimentos' data-aos="fade-up">
      <div>
        <h2>O que nossos clientes dizem</h2>
      </div>
      <Styled.ContainerCards>
      <Carousel cols={cols} rows={1} gap={10} loop scrollSnap={true} showDots={true} mobileBreakpoint={0}>
  {React.Children.toArray(
    list.map(function(item:any){
    return(
      <Carousel.Item>
    <Styled.Card>
          <Image
           loading='lazy'
           src={quote}
           alt='quote'
           width={50}
          />
          <h4>{item.titulo}</h4>
          <p>{item.texto}</p>
          <Link href={item.instagram}><Image
           loading='lazy'
           src={insta}
           alt='instagram icon'
           width={20}
          /> RESULTADO</Link>
    </Styled.Card>
    </Carousel.Item>
    )
  }))}
  </Carousel>
      </Styled.ContainerCards>
    </Styled.TestimonialsSection>
  )
}