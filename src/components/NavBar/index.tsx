import * as Styled from './style'
import Image from 'next/image'
import Logo  from '../../assets/images/logo.png'

const NavBar:React.FC = () => {
  return ( 
    <Styled.NavMenu>
    <a href="/"><Image src={Logo} alt="" width={100}  /></a>
    
      <Styled.Links>
        <li><a href="/">Sobre</a></li>
        <li><a href="/">Depoimentos</a></li>
        <li> <a href="/">Serviços</a></li>
      </Styled.Links>
    
    </Styled.NavMenu>
    
   );
}
 
export default NavBar;