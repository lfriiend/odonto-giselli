import React from 'react';
import { useState, useEffect } from 'react';
import * as Styled from './style';
import Image from 'next/image';
import Link from 'next/link';
import {AiFillCloseCircle} from 'react-icons/ai';

export default function DiscountPopup(data:any) {
  const [showPopup, setShowPopup] = useState(false); //mudar estado

  let list = data.props.allPopups

  // Verifica se a popup já foi exibida antes
  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenDiscountPopup');
    if (!hasSeenPopup) {
      setShowPopup(true);
    }
  }, []);

  // Oculta a popup e define que ela não deve ser exibida novamente
  function handleHidePopup() {
    setShowPopup(false);
    localStorage.setItem('hasSeenDiscountPopup', 'true');
  }

  if (showPopup) {
    return (
      <Styled.Popup>
        <Styled.CloseButton onClick={handleHidePopup}><AiFillCloseCircle size={50}/></Styled.CloseButton>
        {React.Children.toArray(
          list.map(function(item:any){
            return(
              <Styled.PopupContainer>
              <Image
              src={item.imagem.url}
              alt=''
              width={100}
              height={10}
              style={{height: 'auto'}}
              />
              <Styled.Message>{item.titulo}</Styled.Message>
              <span>{item.texto}</span>
              <Link href="">
        saiba mais</Link>
              </Styled.PopupContainer>
            )
          })
        )}
      </Styled.Popup>
    );
  }

  return null;
}
