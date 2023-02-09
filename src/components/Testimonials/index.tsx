import * as Styled from './style'

export default function Testimonials(){
  return(
    <Styled.TestimonialsSection>
      <div>
        <h1>O que nossos clientes dizem</h1>
      </div>
      <Styled.ContainerCards>
        <Styled.Card></Styled.Card>
        <Styled.Card></Styled.Card>
        <Styled.Card></Styled.Card>
      </Styled.ContainerCards>
    </Styled.TestimonialsSection>
  )
}