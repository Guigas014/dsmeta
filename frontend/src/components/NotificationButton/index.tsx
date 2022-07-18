import React from 'react'; 
import axios from 'axios';

import Icon from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../utils/request' 

import './styles.css'; 


type Props = {
  saleId: number;
}

function handleClick(id : number) {
  axios(`${BASE_URL}/sales/${id}/notification`)
    .then(res => {
      console.log('Sucesso!!')
    }) 
}


export function NotificationButton({saleId} : Props) { 

  return ( 
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
      <img src={Icon} alt="Notificar" />
    </div>  
  ); 

}
