import { useState } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import {AiFillCloseCircle} from 'react-icons/ai'
import * as Styled from './styles'

const MobileMenu: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  console.log(showMenu)
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Styled.NavMobile>
    <button className={showMenu ? 'icon iconActive' : 'icon'} onClick={handleClick}>
    <FaBars size={50}/>
    </button>
    <button className={showMenu ? 'close closeActive' : 'close'} onClick={handleClick}>
     <AiFillCloseCircle size={50}/>
    </button>
    <ul id='nav-menu' className={showMenu ? 'menu menuOpen' : 'menu menuClose'}>
      <li><Link href="#container-banner" onClick={handleClick}>Home</Link></li>
      <li><Link href="#about" onClick={handleClick}>Sobre</Link></li>
      <li><Link href="#customer" onClick={handleClick}>Depoimentos</Link></li>
      <li><Link href="#container-contact" onClick={handleClick}>Contato</Link></li>
    </ul>
  </Styled.NavMobile>
  );
};

export default MobileMenu;
