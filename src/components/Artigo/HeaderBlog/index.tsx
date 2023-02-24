import Image from "next/image"
import Logo from '../../../assets/images/logo.png'
import * as Styled from './style'
import Link from "next/link"

export default function HeaderBlog(){
  return(
    <Styled.HeaderBlog>
      <Link href={'/'}>
      <Image
      src={Logo}
      alt='Logo da Dra. Giselli'
      width={100}
      />
      </Link>
    </Styled.HeaderBlog>
  )
}