import * as Styled from './style'
import Image from 'next/image'
import Logo  from '../../assets/images/logo.png'
import Link from 'next/link'
import MobileMenu from './MobileMenu'

const NavBar:React.FC = () => {
  return ( 
    <Styled.NavMenu>
    <Link className='logo' href="/" aria-label="Logo Dra. Giselli ALves"><Image src={Logo} alt="Logo Dra. Giselli Alves" width={100}  /></Link>
    
      <Styled.Links>
        <li><Link href="/">Sobre</Link></li>
        <li><Link href="/">Depoimentos</Link></li>
        <li> <Link href="/">Serviços</Link></li>
        <li> <Link href="/">Especialistas</Link></li>
      </Styled.Links>
    
    <Styled.Mobile>
      <MobileMenu/>
    </Styled.Mobile>
    </Styled.NavMenu>
    
   );
}
 
export default NavBar;