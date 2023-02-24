import * as Styled from './style'
import Image from 'next/image'
import Logo  from '../../assets/images/logo.png'
import Link from 'next/link'
import MobileMenu from './MobileMenu'

const NavBar:React.FC = () => {
  return ( 
    <Styled.NavMenu data-aos="fade-down">
    <Link 
    className='logo' 
    href="#home" 
    aria-label="Navegue até a tela inicial"
    scroll={false}>
    <Image src={Logo} alt="Logo Dra. Giselli Alves" width={100}  />
    </Link>
    
      <Styled.Links>
        <li><Link 
        href='#sobre'
        aria-label="Navegue até a seção sobre" 
        scroll={false}>
          Sobre
          </Link></li>
        <li><Link 
        href="#depoimentos"
        aria-label="Navegue até a seção depoimentos de clientes" 
        scroll={false}>
          Depoimentos
          </Link></li>
        <li> <Link 
        href="#servicos" 
        aria-label="Navegue até a seção de nossos serviços" 
        scroll={false}>
          Serviços
          </Link></li>
        <li> <Link 
        href="#especialistas" 
        aria-label="Navegue até a seção dos nossos especialistas" 
        scroll={false}>
          Especialistas
          </Link></li>
      </Styled.Links>
    
    <Styled.Mobile>
      <MobileMenu/>
    </Styled.Mobile>
    </Styled.NavMenu>
    
   );
}
 
export default NavBar;