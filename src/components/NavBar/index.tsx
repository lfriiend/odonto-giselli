import * as Styled from './style'
import Image from 'next/image'
import Logo  from '../../assets/images/logo.png'
import Link from 'next/link'

const NavBar:React.FC = () => {
  return ( 
    <Styled.NavMenu>
    <Link className='logo' href="/"><Image src={Logo} alt="" width={100}  /></Link>
    
      <Styled.Links>
        <li><Link href="/">Sobre</Link></li>
        <li><Link href="/">Depoimentos</Link></li>
        <li> <Link href="/">Serviços</Link></li>
        <li> <Link href="/">Especialistas</Link></li>
      </Styled.Links>
    
    </Styled.NavMenu>
    
   );
}
 
export default NavBar;